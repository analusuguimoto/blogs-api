const express = require('express');

const router = express.Router();

const validation = require('../validations/post'); // validacao do joi
const userAuth = require('../jwt/user-auth'); // validação do jwt
const newPost = require('../controllers/post');

router.post('/', userAuth.jwtUser, validation, newPost.newPost);

module.exports = router;