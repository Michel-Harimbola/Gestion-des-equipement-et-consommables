const express = require("express");
const NotificationController = require("../controllers/notification.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", auth, NotificationController.getAllNotifications);
router.get("/actif", auth, NotificationController.getAllStockNotifications);
router.get("/userNotification", auth, NotificationController.getUserNotification);
router.patch("/readAll", auth, NotificationController.markAllAsRead);
router.delete("/:id", auth, NotificationController.deleteNotification);

module.exports = router;
