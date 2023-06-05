const express = require('express');
const { dbConnection } = require('./config/db');
const { userRoute } = require('./routes/userRoute');
const app = express();
const cookieParser = require('cookie-parser');
const { authentication } = require('./middleware/authenticationMiddleware');
const { flightRoute } = require('./routes/flightRoute');
const { bookingRoute } = require('./routes/bookingRoute');



app.get('/', (req,res)=>{res.send("Welcome in Air Ticket Booking Backend")});

// Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

// Routes Location



app.use('/api' , userRoute);
app.use(authentication)
// app.use('/api' , authentication);
app.use('/api' , flightRoute);
app.use('/api' , bookingRoute);





app.listen(5000,async()=>{
    try {
        await dbConnection;
        console.log('Connected to database')
        console.log('Server is running on port :5000')
    } catch (error) {
        console.log(error.message)
    }
})