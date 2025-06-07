const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A hospital must have a name'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'A hospital must have a phone number'],
      unique: true,
    },
    drivers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Driver',
      },
    ],
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

// To intereact with earth dimensions
hospitalSchema.index({ location: '2dsphere' });

hospitalSchema.virtual('driversVirtual', {
  ref: 'Driver',
  foreignField: 'hospital',
  localField: '_id',
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
