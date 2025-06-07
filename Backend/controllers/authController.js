const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// This will return a jwt token based on id
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  // 1. create token
  const token = signToken(user);

  console.log(token);

  // 2. Create cookies and send them using res
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_In * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOption);
  res.cookie('userId', user.id, cookieOption);

  // 3. reset user password
  user.password = undefined;

  // 4. Send the token with the user data
  res.status(statusCode).json({
    status: 'success',
    user,
    token,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  // 1.Get data from the body and create user
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  const newUser = {
    name,
    email,
    password,
    passwordConfirm,
  };

  const user = await User.create(newUser);

  // 2. Create a token for the user and send it
  createSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  // 1. Get requried fields from body
  const email = req.body.email;
  const password = req.body.password;

  // 2. Check if both email and password are present in the body
  if (!email || !password) {
    return next(new AppError('Both fields are required for login', 404));
  }

  // 3. Find the user using this email
  const user = await User.findOne({ email: email }).select('+password');

  // 4. Find if the user exists and if it does check whether the password is correct
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('No user found with this email', 404));
  }

  // 5. Create a token and send it
  createSendToken(user._id, 200, res);
});

exports.logout = (req, res) => {
  // 1. Just reset the cookie
  res.cookie('jwt', 'loogedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.cookie('userId', 0, {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  // 2. Send response
  res.status(200).json({
    status: 'success',
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1. Getting token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // How you will get token. Get it form req.headers.
  // 2. Check if the token is present. If the token is not present it means the user is not logged in.
  if (!token) {
    return next(new AppError('You are not logged in. Please log in', 401));
  }

  // 3.Validate token(Verification) do it with the help of 'jwt.verify'
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY,
  );

  // 4. Check if the user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('User belonging to this token no longer exist.', 401),
    );
  }

  // 5. Check if user changed password after token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('User recently changed password', 401));
  }

  req.user = currentUser;
  // 6. Grant access to protected routes
  next();
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  // 1. Get token and check if its there
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET_KEY,
      );

      const currentUser = await User.findById(decoded.id);

      if (!currentUser) {
        return next();
      }

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      res.locals.user = currentUser;
      return next();
    } catch (err) {
      console.log(err);
      return next();
    }
  }
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // Check if the current user's role is allowed to perform a certain action
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to access this action', 403),
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });

  // 2. Check it this user exits
  if (!user) {
    return next(new AppError('There is no user with this email', 404));
  }

  // 3. Create a random token and save that user without running any validators
  const resetToken = user.createPasswordResetToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`;

  // 4. Send reset token to the user's email
  res.status(200).json({
    status: 'success',
    data: resetToken,
    resetUrl,
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2. If token has expired and user no longer exits send error
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  // 3. If token has not expired and user exists set the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  // 4. Update changedPasswordAt and reset token
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // 5. Create and send a new token
  await user.save();
  createSendToken(user._id, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1. Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2. Check of POSTed password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong', 401));
  }

  // 3. If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4. Create and send a new token
  createSendToken(user, 200, res);
});
