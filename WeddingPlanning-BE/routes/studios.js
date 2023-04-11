const express = require('express');
const router = express.Router();

// Body Parser
router.use(express.urlencoded({ extended: true }));

// Controllers
const StudioController = require('../controllers/studios');

router.use(express.json());

// Require isLoggedIn
const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get('/Studio/add', StudioController.Studio_create_get);
router.post('/Studio/add', StudioController.Studio_create_post);

router.get('/Studio/index', StudioController.Studio_index_get);
router.get('/Studio/detail', StudioController.Studio_show_get);

router.get('/Studio/edit', StudioController.Studio_edit_get);
router.put('/Studio/update', StudioController.Studio_update_put);

router.delete('/Studio/delete', StudioController.Studio_delete_get);

module.exports = router;