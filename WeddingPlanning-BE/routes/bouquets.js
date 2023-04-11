const express =require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))


// Controllers
const BouquetCntrl = require('../controllers/bouquets')

router.use(express.json())


// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");


// Routes

router.get("/Bouquet/add",BouquetCntrl.Bouquet_create_get);
router.post("/Bouquet/add",BouquetCntrl.Bouquet_create_post);

router.get("/Bouquet/index", BouquetCntrl.Bouquet_index_get);
router.get("/Bouquet/detail", BouquetCntrl.Bouquet_show_get);

router.get("/Bouquet/edit",BouquetCntrl.Bouquet_edit_get);
router.put("/Bouquet/update",BouquetCntrl.Bouquet_update_put);


router.delete("/Bouquet/delete",BouquetCntrl.Bouquet_delete_get);

module.exports = router
