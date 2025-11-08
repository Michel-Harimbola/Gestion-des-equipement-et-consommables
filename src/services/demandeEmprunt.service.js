const prisma = require("../lib/prisma");

class DemandeEmpruntService {
  static async createDemande(utilisateurId, equipementId, dateRetourPrevu) {
    // Vérifier si équipement existe et est dispo
    const equipement = await prisma.equipement.findUnique({ where: { id: equipementId } });
    if (!equipement) throw new Error("Équipement introuvable");
    if (equipement.etat !== "Disponible") throw new Error("Équipement non disponible");

    // Changer temporairement l'état à EnMaintenance
    await prisma.equipement.update({
      where: { id: equipementId },
      data: { etat: "EnMaintenance" },
    });

    // Créer la demande
    const demande = await prisma.demandeEmprunt.create({
      data: { utilisateurId, equipementId, dateRetourPrevu, statut: "EnAttente" },
    });

    return demande;
  }

  static async getAllDemandes() {
    return prisma.demandeEmprunt.findMany({
      include: {
        utilisateur: { select: { nom: true, prenom: true, email: true } },
        equipement: { select: { nom: true, type: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async approuverDemande(id) {
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id } });
    if (!demande) throw new Error("Demande introuvable");

    // Créer l’emprunt réel
    await prisma.emprunt.create({
      data: {
        utilisateurId: demande.utilisateurId,
        equipementId: demande.equipementId,
        dateRetourPrevu: demande.dateRetourPrevu,
        statut: "EnCours",
      },
    });

    // Changer statut de la demande et équipement
    await prisma.demandeEmprunt.update({
      where: { id },
      data: { statut: "Approuve" },
    });

    await prisma.equipement.update({
      where: { id: demande.equipementId },
      data: { etat: "Emprunter" },
    });

    return { message: "Demande approuvée et emprunt créé" };
  }

  static async refuserDemande(id) {
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.demandeEmprunt.update({
      where: { id },
      data: { statut: "Refuse" },
    });

    // Remettre équipement en dispo
    await prisma.equipement.update({
      where: { id: demande.equipementId },
      data: { etat: "Disponible" },
    });

    return { message: "Demande refusée" };
  }
}

module.exports = DemandeEmpruntService;
