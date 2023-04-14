const express = require('express');
const userController = require('../controllers/user-controller');
const emailController = require('../controllers/emailController');
const memberController = require('../controllers/memberController')

const router = express.Router();

// to register new user
router.route('/signup')
.post(userController.signIn);

// to login user
router.route('/login')
.post(userController.login);

// email verification 
router.route('/email')
.post(emailController.send);

router.route('/getTeamMembers')
.get(memberController.send);


module.exports = router;