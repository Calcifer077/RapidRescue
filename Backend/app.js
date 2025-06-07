const express = require('express');
const cookieParser = require('cookie-parser');

const hospitalRouter = require('./routes/hospitalRoutes');
const userRouter = require('./routes/userRoutes');
const driverRouter = require('./routes/driverRoutes');

const app = express();

// Below middleware is used to parse the data from the cookie
app.use(cookieParser());

// For reading body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/hospital', hospitalRouter);
app.use('/api/v1/driver', driverRouter);

module.exports = app;
