const express = require('express');
const hospitalController = require('../controllers/hospitalController');

const router = express.Router();

router
  .route('/')
  .get(hospitalController.getAllHospitals)
  .post(hospitalController.createHospital);

router
  .route('/:id')
  .get(hospitalController.getHospital)
  .patch(hospitalController.updateHospital)
  .delete(hospitalController.deleteHospital);

module.exports = router;
