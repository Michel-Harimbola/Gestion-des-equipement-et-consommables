const NotificationService = require("../services/notification.service");


exports.getUserNotification = async (req, res) => {
  try {
    const result = await NotificationService.getUserRetardNotifications(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAllAsRead = async (req, res) => {
  try {
    const result = await NotificationService.markAllAsRead(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStockNotifications = async (req, res) => {
  try {
    const result = await NotificationService.getAllStockNotifications(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const result = await NotificationService.getAllNotifications({ page, limit });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteNotification = async (req, res) => {
    try {
        const result = await NotificationService.deleteNotification(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
