const express = require("express");
const NotificationController = require("../controllers/notification.controller");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", auth, NotificationController.getAll);

module.exports = router;
