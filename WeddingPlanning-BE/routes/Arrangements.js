const express =require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))


// Controllers
const ArrangementCntrl = require('../controllers/arrangements')

router.use(express.json())


// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");


// Routes
// route for Arrangement_create_post

router.get("/Arrangement/add",ArrangementCntrl.Arrangement_create_get);
router.post("/Arrangement/add",ArrangementCntrl.Arrangement_create_post);

router.get("/Arrangement/index", ArrangementCntrl.Arrangement_index_get);
router.get("/Arrangement/detail", ArrangementCntrl.Arrangement_show_get);

router.get("/Arrangement/edit",ArrangementCntrl.Arrangement_edit_get);
router.put("/Arrangement/update",ArrangementCntrl.Arrangement_update_put);


router.delete("/Arrangement/delete",ArrangementCntrl.Arrangement_delete_get);

module.exports = router


