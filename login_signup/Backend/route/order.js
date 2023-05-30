const express = require('express')
const { OrderModel } = require('../Model/order.model')
const orderrouter = express.Router()



orderrouter.post('/order', async (req, res) => {
    const { name, quantity, size } = req.body;
    try {
        const order = new OrderModel({ name, quantity, size })
        const final = await order.save()
        res.send(final)
    } catch (error) {
        res.send(error)
    }
})

module.exports = { orderrouter }