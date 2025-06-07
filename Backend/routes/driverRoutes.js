const express = require('express');
const driverController = require('../controllers/driverController');

const router = express.Router();

router
  .route('/drivers-within/:latlng')
  .get(driverController.getDriverWithinDistance);

router
  .route('/')
  .get(driverController.getAllDrivers)
  .post(driverController.createDriver);

router
  .route('/:id')
  .get(driverController.getDriver)
  .patch(driverController.updateDriver)
  .delete(driverController.deleteDriver);

module.exports = router;
