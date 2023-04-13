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

// Set storage engine for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// Initiate upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // limit file size to 1MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image');

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only!');
  }
}

// Initializing the application
const app = express();

// Setting the port number for the server
const PORT = 4000;

 //import routes
 const indexRoute = require('./routes/index');
 const authRoute = require('./routes/auth');
 const DJRoute =require('./routes/DJs')
 const securityController= require('./routes/securities')
 const BouquetCntrl=require('./routes/bouquets')
 const StudioController = require('./routes/studios');
 const ArrangementCntrl = require('./routes/Arrangements')
 const BuffetCntrl =require('./routes/Buffets')
 const HallCntrl = require('./routes/Halls')
 const HospitalitiesCntrl = require('./routes/Hospitality')

 

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
 })


//mount route
app.use('/', indexRoute);
app.use('/', authRoute);
app.use('/',DJRoute);
app.use('/',securityController)
app.use('/',BouquetCntrl)
app.use('/',StudioController)
app.use('/',ArrangementCntrl)
app.use('/',BuffetCntrl)
app.use('/',HallCntrl)
app.use('/',HospitalitiesCntrl)

// app.use(cors());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// app.use(express.static(__dirname + '/public'));


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
