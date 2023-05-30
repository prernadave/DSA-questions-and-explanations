const mongoose = require('mongoose')
require('dotenv').config()
const connection = mongoose.connect(process.env.url)

const documentSchema = mongoose.Schema({
    name: String,
    content: String
  });
  
  const Document = mongoose.model('Document', documentSchema);
  
  

module.exports={connection, Document}