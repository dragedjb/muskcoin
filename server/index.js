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
    'https://muskcoin-coral.vercel.app',
    'https://muskcoin-git-main-drageds-projects.vercel.app',
    'https://muskcoin-ajjq2qnzu-drageds-projects.vercel.app'// ADD YOUR NEW LIVE URL HERE
];

app.use(cors({
    origin: function (origin, callback) {
        // 1. Allow requests with no origin (like mobile apps or Postman)
        if (!origin) return callback(null, true);

        // 2. Check if origin is in our list OR is a vercel.app subdomain
        const isAllowed = allowedOrigins.includes(origin) || 
                         origin.endsWith('.vercel.app');

        if (isAllowed) {
            callback(null, true);
        } else {
            console.log("CORS Blocked Origin:", origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
    res.json({ message: "MuskCoin API is running..." });
});

app.use('/', require('./routes/authRoutes'))

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`server is running on port ${port}`))