const { UserModel } = require("../Model/user.model");
const express = require('express')
const loginrouter = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()


loginrouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ email }, process.env.secret, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = { loginrouter }
UserModel