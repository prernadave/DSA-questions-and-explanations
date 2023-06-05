const Flight = require("../model/flightModel")

const getAllFlight = async (req, res) => {
    try {
        const allFlights = await Flight.find();
        console.log(allFlights);
        res.json({ allFlights })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getSingleFlight = async (req, res) => {
    const id = req.params.id;
    try {
      const singleFlight = await Flight.findById(id);
      if (!singleFlight) {
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.send(singleFlight);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

const addFlight = async (req, res) => {
    const {
      airline,
      flightNo,
      departure,
      arrival,
      departureTime,
      arrivalTime,
      seats,
      price
    } = req.body;
    const id = req.params.id;
    try {
      const singleFlight = await Flight.findOne({ _id: id });
      if (singleFlight) {
        return res.json({ message: 'Flight already exists' });
      }
  
      const payload = new Flight({
        airline,
        flightNo,
        departure,
        arrival,
        departureTime: new Date(),
        arrivalTime: new Date(),
        seats,
        price
      });
  
      await payload.save();
      res.status(200).json({ message: 'Flight added successfully', data: payload });
    } catch (error) {
      res.status(404).send({
        Error: error.message
      });
      console.log(error.message);
    }
  };
  

const updateFlight = async (req, res) => {
    const id = req.params.id;
    try {
        const flight = await Flight.findByIdAndUpdate({ _id: id }, req.body);
        res.json({ message: "Flight updated successfully", flight: flight });
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}

const deleteFlight = async (req, res) => {
    const id = req.params.id;
    try {
        const flight = await Flight.findByIdAndDelete(id);
        res.json({ message: "Flight deleted successfully", flight: flight });
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


module.exports = {getAllFlight, getSingleFlight, addFlight, updateFlight, deleteFlight}