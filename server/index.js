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

// --- CORS CONFIGURATION ---
const allowedOrigins = [
    'http://localhost:5173',
    'https://muskcoin-coral.vercel.app' // Your future live URL
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use('/', require('./routes/authRoutes'))

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`server is running on port ${port}`))