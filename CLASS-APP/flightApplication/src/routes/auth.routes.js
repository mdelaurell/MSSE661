const express = require('express');
const authController = require('./controllers/auth.controller');

const authRoutes = express.Router();

authRoutes.post('/register', authContoller.register);

authRoutes.post('/login', controller.login);

module.exports = authRoutes;