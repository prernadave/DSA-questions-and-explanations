const mongoose = require('mongoose');

const flightModel = mongoose.Schema(

    {

        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
    }

)


const Flight = mongoose.model('Flight', flightModel);

module.exports = Flight;