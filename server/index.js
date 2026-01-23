const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');
const helmet = require('helmet');

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database Connected'))
.catch((err) => console.log('Database not connected'))

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use(helmet({
    contentSecurityPolicy: false,
}));

// backend/index.js

const allowedOrigins = [
    'http://localhost:5173',           // Keep this for local testing
    'https://muskcoin-coral.vercel.app' // ADD YOUR NEW LIVE URL HERE
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log("Blocked by CORS:", origin); 
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true 
}));

app.get('/', (req, res) => {
    res.json({ message: "MuskCoin API is running..." });
});

app.use('/', require('./routes/authRoutes'))

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`server is running on port ${port}`))