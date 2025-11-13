const NotificationService = require("../services/notification.service");

class NotificationController {
  static async getAll(req, res) {
    try {
      const notifications = await NotificationService.getAllNotifications();
      res.json(notifications);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = NotificationController;
