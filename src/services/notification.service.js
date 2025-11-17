const prisma = require("../lib/prisma.js");

class NotificationService {
  static async createNotification({ message, type , consommableId = null, empruntId = null }) {
    return prisma.notification.create({
      data: { message, type, consommableId, empruntId },
    });
  }

  static async getAllStockNotifications() {
    return prisma.notification.findMany({
      orderBy: { DateEnvoi: "desc" },
      include: {
        consommable: { select: { id: true, nom: true } },
        emprunt: { select: { id: true } },
      },
    });
  }
}

module.exports = NotificationService;
