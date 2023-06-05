const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
      }
)


const User = mongoose.model('User', userModel);

module.exports = User;