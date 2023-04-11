// Importing the required modules
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./helper/ppConfig');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');

// Initializing the application
const app = express();

// Setting the port number for the server
const PORT = 4000;

// Importing routes
const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const DJRoute =require('./routes/DJs');
const hallRoute = require('./routes/Halls');
const BuffetRoute=require('./routes/Buffets');
const HospitalityRoute = require('./routes/Hospitality');

// Using middleware
dotenv.config();
app.use(express.static("public"));
app.use(expressLayouts);
app.use(session({
     secret: 'supersecuresecret!',
     saveUninitialized: true,
     resave: false,
     cookie: {maxAge: 604800}
 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });
app.use(cors());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
app.use(express.static(__dirname + '/public'));
app.use('/', indexRoute);
app.use('/', authRoute);
app.use('/',DJRoute);
app.use('/',hallRoute);
app.use('/',BuffetRoute);
app.use('/',HospitalityRoute);

// Setting up the view engine
app.set("view engine", "ejs");

// Ignoring warnings
mongoose.set('strictQuery', false);

// Connecting to the database
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected');
})
.catch((error) => {
    console.log(error);
});

// Starting the server
app.listen(PORT, ()=>{
  console.log(`WeddingPlanning is running on ${PORT}`)
});
