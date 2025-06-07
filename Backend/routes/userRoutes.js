const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updatePassword', authController.updatePassword);
router.route('/').get(userController.getAllUsers);

module.exports = router;
