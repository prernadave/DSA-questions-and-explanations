const User = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUser = async (req, res) => {
    try {
        const data = await User.find()
        res.json(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
}


const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isPresent = await User.findOne({ email: email });
        if (isPresent) {
            res.json({ message: "User already registered" })
        }
        bcrypt.hash(password, 5, async (err, result) => {
            if (err) {
                res.status(404).json({ message: err.message })
            } else {
                const data = new User({
                    name, email, password: result
                })
                await data.save();

                res.status(200).json({ message: 'successfullly registered', data: data })
            };
        });


    } catch (error) {

        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)

    }
}


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      const hashedPassword = user.password;
      bcrypt.compare(password, hashedPassword, (err, result) => {
        if (err) {
          return res.status(500).send({ message: 'Internal server error' });
        }
        if (!result) {
          return res.status(401).send({ message: 'Password mismatch!' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.secret, { expiresIn: '7h' });
        res.cookie('normalToken', token, { httpOnly: true });
        res.status(200).json({
          message: 'Login successful',
          token: token
        });
      });
    } catch (error) {
      res.status(500).send({
        Error: error.message
      });
      console.log(error.message);
    }
  };
  

module.exports = { getUser, register, login }

// 647da153a443d089dc837903 flight
// 647d799a9ca6ab8cf9e3abf9
// [
//     {
//       "_id": "647d799a9ca6ab8cf9e3abf9",
//       "name": "Prerna",
//       "email": "prerna@123",
//       "password": "$2b$05$hxSEUCfZyxJA3wVdpF9cPOh.38S/KJ9Bf36yi67mLKhHoqrHZyFS.",
//       "__v": 0
//     }
//   ]