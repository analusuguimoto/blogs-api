const express = require('express');

const router = express.Router();

const userAuth = require('../jwt/user-auth');
const catValidation = require('../validations/category');
const category = require('../controllers/category');

router.post('/', userAuth.jwtUser, catValidation, category.categoryPost);

module.exports = router;