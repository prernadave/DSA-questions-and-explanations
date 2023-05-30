const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    name:String,
    quantity:Number ,
    size:String
})

const OrderModel = mongoose.model('orderdata', orderSchema)
module.exports = {OrderModel}