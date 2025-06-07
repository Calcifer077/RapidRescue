const Hospital = require('../models/hospitalModel');
const factory = require('./handlerFactory');

exports.getAllHospitals = factory.getAll(Hospital);
exports.getHospital = factory.getOne(Hospital);
exports.createHospital = factory.createOne(Hospital);
exports.updateHospital = factory.updateOne(Hospital);
exports.deleteHospital = factory.deleteOne(Hospital);
