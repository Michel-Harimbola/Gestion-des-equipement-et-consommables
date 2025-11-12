const express = require('express');
const authController = require('../controllers/auth.controller');
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.patch('/:id/changePassword', auth, authController.changePassword);

module.exports = router;