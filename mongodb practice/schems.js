const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    "title": String,
    "genre": String,
    "price": Number,
    "author": String,
})


const Book = mongoose.model('Book', bookSchema)

module.exports = { Book }