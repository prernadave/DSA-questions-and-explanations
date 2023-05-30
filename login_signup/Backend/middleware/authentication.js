const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Model/user.model");
require('dotenv').config()



function authMiddleware(req, res, next) {

  const token = req.headers.authorization
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  if (token) {
    const decoded = jwt.verify(token, process.env.secret); //verifying
    console.log(decoded);
    if (decoded) {
      req.body.userID = decoded.userID;

      next();
    } else {
      res.send("Please login first!");
    }
  } else {
    res.send("Please login first!");
  }
}



module.exports = authMiddleware;
