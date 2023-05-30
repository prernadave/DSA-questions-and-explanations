const express = require('express')
const app = express()
app.use(express.json())
const { connection } = require("./config/db");
const { loginrouter } = require('./route/login');
const { registerrouter } = require('./route/register');
const authMiddleware = require('./middleware/authentication');
const cors = require('cors');
const { orderrouter } = require('./route/order');



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use('/api', registerrouter)
app.use('/api', loginrouter)
app.use('/api', authMiddleware, orderrouter)

app.listen(5000, async () => {
  try {
    await connection
    console.log('connected to DB')
    console.log('server running at port 5000');
  } catch (error) {
    console.log(error);
  }
})
