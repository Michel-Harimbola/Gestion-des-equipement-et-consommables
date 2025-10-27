const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const auth = require("../middlewares/authMiddleware.js");


router.post('/register', authController.register);
router.post('/login', authController.login);
router.patch('/:id/changePassword', auth, authController.changePassword);

module.exports = router;