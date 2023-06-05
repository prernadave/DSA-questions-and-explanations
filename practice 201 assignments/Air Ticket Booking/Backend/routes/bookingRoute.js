const express = require('express');
const { dashboardController, booking } = require('../controllers/bookingController');
const bookingRoute = express.Router();

bookingRoute.get('/bookings', dashboardController);

bookingRoute.post('/bookings', booking)


module.exports = {bookingRoute}