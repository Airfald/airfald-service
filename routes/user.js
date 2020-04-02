var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
let jwt = require('../middlewares/jwt')


/* GET users listing. */
router.get('/api/login', userController.login);
router.get('/api/getUserInfo', jwt.verify, userController.getUserInfo);
router.get('/api/getUserList', jwt.verify, userController.getUserList);

module.exports = router;
