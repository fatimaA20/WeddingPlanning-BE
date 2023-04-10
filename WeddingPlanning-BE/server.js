// Importing the 'express' module
const express = require('express')
// Importing the 'mongoose' module
const mongoose = require('mongoose')

const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');


// most important thing     
require('dotenv').config();

// Setting the port number for our server
const PORT = 4000

// Initializing our application by creating an instance of the Express module
const app = express()

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

//initilize express layout
const expressLayouts = require('express-ejs-layouts')

// look into views folder with a file name called layout.ejs
app.use(expressLayouts)

// const bcrypt = require('bcrypt');

// Importing the 'express-session' module
const session = require('express-session')
// Importing the 'passport' module in the place where we config in
const passport = require('./helper/ppConfig')

app.use(express.static(__dirname + '/public'));

// uses the session library and sort our session
app.use(session({
     secret: 'supersecuresecret!',
     saveUninitialized: true,
     resave: false,
     cookie: {maxAge: 604800}
 }))
 app.use(passport.initialize())
 app.use(passport.session())

 // adding this middleWare to take user info
 app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 })

//  these are middleware to upload images
 app.use(cors());
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
 //import routes
const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const DJRoute =require('./routes/DJs')
const imageRoute = require('./routes/image');


//mount route
app.use('/', indexRoute);
app.use('/', authRoute);
app.use('/',DJRoute);
app.use('/', imageRoute);


// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");

//Ignore warnings
mongoose.set('strictQuery', false)




//database connection
mongoose.connect(process.env.DATABASE_URI  , {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => {
    console.log('MongoDB Connected');
  })
  .catch((error) => {
    console.log(error);
  });


// Starting the server and listening for incoming requests on the specified ports
app.listen(PORT, ()=>{
  console.log(`WeddingPlanning is running on ${PORT}`)
})

// const bodyParser = require('body-parser');

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());
