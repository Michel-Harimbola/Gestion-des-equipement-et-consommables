const prisma = require("../lib/prisma.js");

class NotificationService {
  static async createNotification({ message, type , consommableId = null, empruntId = null }) {
    return prisma.notification.create({
      data: { message, type, consommableId, empruntId },
    });
  }

  static async getAllNotifications() {
    return prisma.notification.findMany({
      where: { type: "AlerteStock" },
      orderBy: { DateEnvoi: "desc" },
      include: {
        consommable: { select: { id: true, nom: true } },
        emprunt: { select: { id: true } },
      },
    });
  }
}

module.exports = NotificationService;
