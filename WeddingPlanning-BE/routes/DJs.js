const express =require('express')
const router = express.Router()

router.use(express.urlencoded({extended:true}))

// Controllers
const DJCntrl = require('./controllers/DJs')

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

let methodOverride = require("method-override");
router.use(methodOverride('_method'))

// Routes
// route for DJ_create_post

router.get("/DJ/add",DJCntrl.DJ_create_get);
router.post("/DJ/add",DJCntrl.DJ_create_post);

router.get("/DJ/index", DJCntrl.DJ_index_get);
router.get("/DJ/detail", articleCntrl.DJ_show_get);

router.get("DJ/edit",DJCntrl.Dj_edit_get);
router.put("DJ/update",DJCntrl.DJ_update_put);


router.get("DJ/delete".DJCntrl.Dj_delete_get);

module.exports = router;


