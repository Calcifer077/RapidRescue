const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        el === this.password;
      },
      message: `Passwords dont' match`,
    },
  },
  role: {
    type: String,
    enum: ['user', 'driver', 'hospitalStaff', 'admin'],
    default: 'user',
  },
  allergies: [
    {
      type: String,
    },
  ],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

userSchema.methods.correctPassword = async function (
  password,
  toBeCheckedPassword,
) {
  return await bcrypt.compare(password, toBeCheckedPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    // 'getTime' is used to convert a date to miilliseconds. Divided by 1000 to get seconds
    // 'parseInt' converts to Integer and 10(decimal) is weight.
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    // console.log(changedTimeStamp, JWTTimestamp);
    return JWTTimestamp < changedTimeStamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  // 'randomBytes' is used to create random data
  // 'hex' specifies the base
  const resetToken = crypto.randomBytes(32).toString('hex');

  // We are doing all the below things because we will be saving this data in the database.

  // 'createHash' is used to create a hash using a specified algorithm.
  // 'update' method is used to feed data to hash which in this case is the 'resetToken' which we created in the above step.
  // 'digest' methods finalizes the hash calculation and returns it in the specified encoding which is 'hex' in this case.
  // After you call 'digest; you can't call any other function.
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
