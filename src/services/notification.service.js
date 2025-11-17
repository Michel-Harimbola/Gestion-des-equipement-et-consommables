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

  static async getUserRetardNotifications(userId) {
    return prisma.notification.findMany({
      where: { 
        type: "RappelRetour",
        emprunt: {
          utilisateurId: userId
        }
      },
      orderBy: { DateEnvoi: "desc" },
      include: {
        consommable: { select: { id: true, nom: true } },
        emprunt: { select: { id: true, usage: true, dateRetourPrevu: true } },
      }
    });
  }

  static async markAllAsRead(userId) {
    return prisma.notification.updateMany({
      where: {
        emprunt: {
          utilisateurId: userId
        }
      },
      data: { vu: true }
    })
  }
}

module.exports = NotificationService;
