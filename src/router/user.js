const express = require('express');

const router = express.Router();

const validation = require('../validations/user');
const user = require('../controllers/user');
const userAuth = require('../jwt/user-auth');

router.post('/', validation, user.user);
router.get('/', userAuth.jwtUser, user.getAllUsers);
router.get('/:id', userAuth.jwtUser, user.userById);

module.exports = router;