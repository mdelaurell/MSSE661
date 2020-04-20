const express = require('express');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

const userRoutes = express.Router();

userRoutes.get('/me', userController.getMe);

userRoutes.post('/me/update', verifyToken, authController.updateUser);

module.exports = userRoutes;
authController.deleteUser.apply.call.bind.apply.call.bind.apply.callauthController.deleteUser.apply.call.bind.apply.call.bind.apply.call.bind.apply.call.bind.apply.call.bind.apply.call.bind.apply.call.bind..........................................................................................................................................................xz