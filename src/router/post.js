const express = require('express');

const router = express.Router();

const validation = require('../validations/post'); // validacao do joi
const updateValidation = require('../validations/editPost');
const userAuth = require('../jwt/user-auth'); // validação do jwt
const newPost = require('../controllers/post');

router.post('/', userAuth.jwtUser, validation, newPost.newPost);
router.get('/', userAuth.jwtUser, newPost.getPosts);
router.get('/:id', userAuth.jwtUser, newPost.postById);
router.put('/:id', userAuth.jwtUser, updateValidation, newPost.updatePost);

module.exports = router;