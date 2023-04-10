const express = require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))

// Controllers
const HospitalityCntrl = require('../controllers/Hospitalities')

router.use(express.json())

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Routes
router.get("/hospitality/add", HospitalityCntrl.hospitality_create_get);
router.post("/hospitality/add", HospitalityCntrl.hospitality_create_post);

router.get("/hospitality/index", HospitalityCntrl.hospitality_index_get);
router.get("/hospitality/detail", HospitalityCntrl.hospitality_show_get);

router.get("/hospitality/edit", HospitalityCntrl.hospitality_edit_get);
router.put("/hospitality/update", HospitalityCntrl.hospitality_update_put);

router.delete("/hospitality/delete", HospitalityCntrl.hospitality_delete_get);

module.exports = router;
