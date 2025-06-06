const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { postcreate } = require('../controllers/PostController');

router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);

router.post("/post",  postcreate)

module.exports = router;
