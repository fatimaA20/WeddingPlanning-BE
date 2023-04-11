const express = require('express');
const router = express.Router();

// Body Parser
router.use(express.urlencoded({ extended: true }));

// Controllers
const securityController = require('../controllers/securities');

router.use(express.json());

// Require isLoggedIn
const isLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get('/security/add', securityController.security_create_get);
router.post('/security/add', securityController.security_create_post);

router.get('/security/index', securityController.security_index_get);
router.get('/security/detail', securityController.security_show_get);

router.get('/security/edit', securityController.security_edit_get);
router.put('/security/update', securityController.security_update_put);

router.delete('/security/delete', securityController.security_delete_get);

module.exports = router;