const prisma = require("../lib/prisma.js");

class UtilisationConsommableService {

  static async create(utilisateurId, data) {
    const { consommableId, quantiteUtilise, description } = data;
    const quantiteUtiliseInd = parseInt(quantiteUtilise, 10);
    const utilisateurIdInt = parseInt(utilisateurId, 10);

    // Vérifie que la quantité est disponible
    const consommable = await prisma.consommable.findUnique({
      where: { id: consommableId },
    });
    
    if (!consommable) throw new Error("Consommable non trouvé");
    if (consommable.quantiteDisponible < quantiteUtiliseInd) {
      throw new Error("Stock insuffisant pour cette utilisation");
    }

    const utilisation = await prisma.utilisationConsommable.create({
      data: {
        utilisateurId: utilisateurIdInt,
        consommableId,
        quantiteUtilise: quantiteUtiliseInd,
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
      data: { quantiteDisponible: consommable.quantiteDisponible - quantiteUtilise },
    });

    return utilisation;
  }

  static async getAll() {
    return prisma.utilisationConsommable.findMany({
      include: {
        utilisateur: { select: { id: true, nom: true } },
        consommable: { select: { id: true, nom: true } },
      },
      orderBy: { dateUtilisation: "desc" },
    });
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