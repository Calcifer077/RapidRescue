const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A driver must have a name'],
    },
    carNumber: {
      type: String,
      required: [true, `A driver's car must have a number plate`],
      unique: true,
    },
    hospital: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hospital',
    },
    phoneNumber: {
      type: String,
      required: [true, 'A driver must have a phone number'],
      unique: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      address: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

// To interact with earth dimensions
driverSchema.index({ location: '2dsphere' });

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
