const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const Hospital = require('../models/hospitalModel');
const Driver = require('../models/driverModel');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => console.log('Database Connection successfull'));

// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

const drivers = JSON.parse(
  fs.readFileSync(`${__dirname}/drivers.json`, 'utf-8'),
);

const hospitals = JSON.parse(
  fs.readFileSync(`${__dirname}/hospitals.json`, 'utf-8'),
);

const importData = async () => {
  try {
    // await User.create(users, {
    //   validateBeforeSave: false,
    // });

    await Driver.create(drivers, {
      validateBeforeSave: false,
    });

    // await Hospital.create(hospitals, {
    //   validateBeforeSave: false,
    // });

    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    // await User.deleteMany();
    // await Hospital.deleteMany();
    await Driver.deleteMany();

    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
