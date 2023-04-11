const express = require('express');
const router = express.Router();

// Body Parser
router.use(express.urlencoded({ extended: true }));

// Controllers
const hallCntrl = require('../controllers/halls');

router.use(express.json());

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");


// Routes
router.get("/hall/add",hallCntrl.hall_create_get);
router.post("/hall/add",hallCntrl.hall_create_post);

router.get("/hall/index", hallCntrl.hall_index_get);
router.get("/hall/detail", hallCntrl.hall_show_get);

router.get("/hall/edit",hallCntrl.hall_edit_get);
router.put("/hall/update",hallCntrl.hall_update_put);


router.delete("/hall/delete",hallCntrl.hall_delete_get);

module.exports = router;
