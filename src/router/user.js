const express = require('express');

const router = express.Router();

const validation = require('../validations/user');
const user = require('../controllers/user');

router.post('/', validation, user.user);

module.exports = router;