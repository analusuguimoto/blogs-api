const express = require('express');

const router = express.Router();

const validation = require('../validations/login');
const login = require('../controllers/login');

router.post('/', validation, login.loginController);

module.exports = router;