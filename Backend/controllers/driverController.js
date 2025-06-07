const Driver = require('../models/driverModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const factory = require('./handlerFactory');

exports.getAllDrivers = factory.getAll(Driver);
exports.getDriver = factory.getOne(Driver);
exports.createDriver = factory.createOne(Driver);
exports.updateDriver = factory.updateOne(Driver);
exports.deleteDriver = factory.deleteOne(Driver);

const calcDistance = (lat, lng, userLat, userLng) => {
  const dx = Math.abs(userLat - lat);
  const dy = Math.abs(userLng - lng);

  return Math.sqrt(dx * dx + dy * dy);
};

exports.getDriverWithinDistance = catchAsync(async (req, res, next) => {
  const { latlng } = req.params;

  const [lat, lng] = latlng.split(',').map(Number);

  if (!lat || !lng) {
    return next(
      new AppError('Please provide both latitude and longitiude', 400),
    );
  }

  //   const drivers = await Driver.find();

  //   const driversWithDistance = drivers.map((driver) => {
  //     const distance = calcDistance(
  //       lat,
  //       lng,
  //       driver.location.coordinates[0],
  //       driver.location.coordinates[1],
  //     );

  //     // 'toFixed' is used to round of decimal upto a certain decimal places in this case 2.
  //     return { ...driver._doc, distance: distance.toFixed(2) };
  //   });

  //   driversWithDistance.sort((a, b) => a.distance - b.distance);

  //   console.log(driversWithDistance);

  // Below we doing aggregation pipleline
  // 'geoNear' -> finds documents closest to a given point
  // 'near' -> the point to meaure distances from. Here we have specified types which is the same as in our model
  // 'distanceField' -> where the calculated distance is stored
  //   'distanceMultiplier' -> converts meters to kilometers
  // 'spherical' -> uses earth dimensions for calculations

  //  'addFileds' -> adds or modifies fields, in this case we rounding 'distance' to 2 decimal places
  // 'sort' -> sorting in any particular order, in this case ascending. If you need to sort in desceding order use '-1' instead of '1'

  //   'lookup' -> is used to perform left outer join, basically performs population but you can't use 'populate' and 'aggregate' together that's why you have to use this.

  //   'unwind' -> is used to deconstruct an array, basically if you won't use it there will be a object inside array but in this case direct elements will be present in the array.

  //  'project' -> it tells what fields will be visible in the result. we have used 'hospital.name' because it is inside a array
  const drivers = await Driver.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        distanceField: 'distance',
        distanceMultiplier: 0.001,
        spherical: true,
      },
    },
    {
      $addFields: {
        distance: { $round: ['$distance', 2] },
      },
    },
    { $match: { available: true } },
    {
      $lookup: {
        from: 'hospitals', // collection name, not model name
        localField: 'hospital', // field name in our model
        foreignField: '_id', // feild to which we are trying to match
        as: 'hospital',
      },
    },
    {
      $unwind: {
        path: '$hospital',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        name: 1,
        distance: 1,
        location: 1,
        phoneNumber: 1,
        'hospital.name': 1,
        'hospital.phoneNumber': 1,
        // include other fields as needed
      },
    },
    {
      $sort: { distance: 1 },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      drivers,
    },
  });
});
