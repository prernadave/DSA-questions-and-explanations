const express  = require('express');
const { connection } = require('./db');
const { router } = require('./route');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the book store')
})

app.use('/api',router)


app.listen(6000, async()=>{
    try {
        await connection
        console.log('connected to db');
        console.log('listenming to the port');
    } catch (error) {
        console.log(error);
    }
})