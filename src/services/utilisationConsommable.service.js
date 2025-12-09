const prisma = require("../lib/prisma.js");
const { getIO } = require("../socket.js");
const notificationService = require("./notification.service.js");

class UtilisationConsommableService {

  static async create(utilisateurId, data) {
    const { consommableId, quantiteUtilise, description } = data;
    const quantiteUtiliseInt = parseInt(quantiteUtilise, 10);
    const utilisateurIdInt = parseInt(utilisateurId, 10);

    const consommable = await prisma.consommable.findUnique({
      where: { id: consommableId },
    });
    
    if (!consommable) throw new Error("Consommable non trouvé");

    const quantiteRestante = consommable.quantiteDisponible - quantiteUtiliseInt;
    if (quantiteRestante < 0) throw new Error("Stock insuffisant");

    const utilisation = await prisma.utilisationConsommable.create({
      data: {
        utilisateurId: utilisateurIdInt,
        consommableId,
        quantiteUtilise: quantiteUtiliseInt,
        description,
      },
      include: {
        utilisateur: { select: { nom: true } },
        consommable: { select: { nom: true } },
      },
    });

    // Réduit le quantiteDisponible du consommable
    await prisma.consommable.update({
      where: { id: consommableId },
      data: { quantiteDisponible: quantiteRestante },
    });
    
    // Vérifier si le quantiteRestante <= seuilCritique et envoyer le notification d'alerte
    if(quantiteRestante <= consommable.seuilCritique) {
      const notif = await notificationService.createNotification({
        message: `${consommable.nom}: ${quantiteRestante} restant.`,
        type: "AlerteStock",
        consommableId: consommable.id,
      });
      const io = getIO();
      io.emit("stock_alert", notif);
    }

    return utilisation;
  }

  static async getAll({ page = 1, limit = 12 }) {
    const skip = (page - 1) * limit;

    const [UseCons, total] = await Promise.all([
      prisma.utilisationConsommable.findMany({
        include: {
          utilisateur: { select: { id: true, nom: true } },
          consommable: { select: { id: true, nom: true } },
        },
        orderBy: { dateUtilisation: "desc" },
        skip,
        take: limit,
      }),
      prisma.utilisationConsommable.count()
    ]);

  return { UseCons, total, page, limit };
  }

  static async getById(id) {
    return prisma.utilisationConsommable.findUnique({
      where: { id: parseInt(id) },
      include: {
        utilisateur: true,
        consommable: true,
      },
    });
  }

  static async update(id, data) {
    return prisma.utilisationConsommable.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async delete(id) {
    return prisma.utilisationConsommable.delete({
      where: { id: parseInt(id) },
    });
  }
}

module.exports = UtilisationConsommableService;