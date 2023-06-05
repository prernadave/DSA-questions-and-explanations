const { bookingModel } = require("../model/bookingModel");

const dashboardController = async (req,res)=>{
    try {
        const dashboard = await bookingModel.find().populate('user').populate('flight')
    res.json({message:'success', data: dashboard})
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message) 
    }
}


const booking = async (req,res)=>{
    const {userId, flightId} = req.body;
    try {
        const booking = new bookingModel({
            user:userId, flight:flightId
        })
        await booking.save()
        res.json({message: 'Success', booking})
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message) 
    }
}

module.exports = {dashboardController, booking}