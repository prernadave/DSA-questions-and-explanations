const express = require('express');
const { getAllFlight, getSingleFlight, addFlight, updateFlight, deleteFlight } = require('../controllers/flightController');
const flightRoute = express.Router();

flightRoute.get('/flights', getAllFlight);
flightRoute.get('/flight/:id', getSingleFlight);
flightRoute.post('/flight', addFlight);
flightRoute.put('/flight/:id', updateFlight);
flightRoute.delete('/flight/:id', deleteFlight);

module.exports = { flightRoute }