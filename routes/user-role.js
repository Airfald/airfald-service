var express = require('express');
var router = express.Router();
var userRoleController = require('../controllers/user-role')

/* GET users listing. */
router.get('/login', userRoleController.login);

module.exports = router;
