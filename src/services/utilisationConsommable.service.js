import { prisma } from "../config/prisma.js";

export default class UtilisationConsommableService {


  static async create(data) {
    const { utilisateurId, consommableId, quantiteUtilise, description } = data;

    // Vérifie que la quantité est disponible
    const consommable = await prisma.consommable.findUnique({
      where: { id: consommableId },
    });
    if (!consommable) throw new Error("Consommable non trouvé");
    if (consommable.stock < quantiteUtilise) {
      throw new Error("Stock insuffisant pour cette utilisation");
    }

    const utilisation = await prisma.utilisationConsommable.create({
      data: {
        utilisateurId,
        consommableId,
        quantiteUtilise,
        description,
      },
      include: {
        utilisateur: { select: { nom: true } },
        consommable: { select: { nom: true } },
      },
    });

    // Réduit le stock du consommable
    await prisma.consommable.update({
      where: { id: consommableId },
      data: { stock: consommable.stock - quantiteUtilise },
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
