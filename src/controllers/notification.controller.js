const NotificationService = require("../services/notification.service");

class NotificationController {
  static async getAll(req, res) {
    try {
      const notifications = await NotificationService.getAllStockNotifications();
      res.json(notifications);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUserNotification(req, res) {
    try {
      const notifications = await NotificationService.getUserRetardNotifications(req.user.id);
      res.json(notifications);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async markAllAsRead(req, res) {
    try {
      const notifications = await NotificationService.markAllAsRead(req.user.id);
      res.json({ message: "Toutes vos notifications sont maintenant vues" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = NotificationController;
