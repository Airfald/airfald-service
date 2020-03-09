var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')

/* GET users listing. */
router.get('/login', userController.login);
router.get('/user/list', userController.getUserList);

module.exports = router;
