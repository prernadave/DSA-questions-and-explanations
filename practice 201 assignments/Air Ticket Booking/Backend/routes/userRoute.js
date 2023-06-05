const express = require('express');
const { getUser, register, login } = require('../controllers/userController');
const userRoute = express.Router();



userRoute.get('/allusers', getUser)
userRoute.post('/register', register)
userRoute.post('/login', login)


module.exports = { userRoute }