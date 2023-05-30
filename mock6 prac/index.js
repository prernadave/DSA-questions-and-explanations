
const express = require('express')
require('dotenv').config()


const app = express()

app.use(express.json())
// const { connection } = require('./db')


app.get('/', async (req, res) => {
    try {
        res.send('hello')
    } catch (error) {
        res.send(error)
    }
})



app.listen(process.env.url, async () => {
    try {
        // await connection;
        console.log('connected to db');
        console.log(`server running at ${process.env.url}`)

    } catch (error) {
        console.log(error);
        console.log('cant connect');
    }

})

// vBAbWXAmlGbXG7YF