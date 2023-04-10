const express =require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))


// Controllers
const DJCntrl = require('../controllers/djs')

router.use(express.json())


// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");


// Routes
// route for DJ_create_post

router.get("/DJ/add",DJCntrl.DJ_create_get);
router.post("/DJ/add",DJCntrl.DJ_create_post);

router.get("/DJ/index", DJCntrl.DJ_index_get);
router.get("/DJ/detail", DJCntrl.DJ_show_get);

router.get("/DJ/edit",DJCntrl.DJ_edit_get);
router.put("/DJ/update",DJCntrl.DJ_update_put);


router.delete("/DJ/delete",DJCntrl.DJ_delete_get);

module.exports = router


