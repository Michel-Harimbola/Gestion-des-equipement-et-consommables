const express = require("express");
const NotificationController = require("../controllers/notification.controller");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", auth, NotificationController.getAll);
router.get("/userNotification", auth, NotificationController.getUserNotification);
router.patch("/read-all", auth, NotificationController.markAllAsRead);

module.exports = router;
