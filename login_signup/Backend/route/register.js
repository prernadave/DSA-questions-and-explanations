const { UserModel } = require("../Model/user.model");
const express = require('express')
const registerrouter = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


registerrouter.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find(); // Query database for all users
        res.json(users); // Return users in JSON format
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
});


registerrouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new UserModel({ name, email, password: hashedPassword })
        await user.save()
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
})


module.exports = { registerrouter }
UserModel