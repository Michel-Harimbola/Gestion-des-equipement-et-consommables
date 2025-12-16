const prisma = require("../lib/prisma.js");

class NotificationService {
  static async createNotification({ message, type , consommableId = null, empruntId = null }) {
    return prisma.notification.create({
      data: { message, type, consommableId, empruntId },
    });
  }

  static async getAllStockNotifications() {
    const notifications = await prisma.notification.findMany({
      where: {
        type: { in: ["AlerteStock", "RappelRetour"] }
      },
      orderBy: { DateEnvoi: "desc" },
      include: {
        consommable: { select: { id: true, nom: true, quantiteDisponible: true, seuilCritique: true } },
        emprunt: { select: { id: true, dateRetourEffective: true } }
      },
    });

    return notifications.filter((notif) => {
      if (notif.emprunt) {
        return notif.emprunt.dateRetourEffective === null;
      }

      if (notif.consommable) {
        return notif.consommable.quantiteDisponible <= notif.consommable.seuilCritique;
      }

      return false;
    });
  }

  static async getUserRetardNotifications(userId) {
    return prisma.notification.findMany({
      where: { 
        type: { in: ["RappelRetour", "Acceptation", "Refus"] },
        OR: [
          { emprunt: { utilisateurId: userId } },
          { demandeEmprunt: { utilisateurId: userId } }
        ]
      },
      orderBy: { DateEnvoi: "desc" },
      include: {
        consommable: { select: { id: true, nom: true } },
        demandeEmprunt: { select: { id: true, type: true, statut: true }},
        emprunt: { select: { id: true, usage: true, dateRetourPrevu: true } },
      }
    });
  }

  static async getAllNotifications({ page = 1, limit = 12 }) {
    const skip = (page - 1) * limit;

    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.notification.count()
    ]);

  return { notifications, total, page, limit };
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
