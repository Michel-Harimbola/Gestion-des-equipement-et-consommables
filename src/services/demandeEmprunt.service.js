const prisma = require("../lib/prisma");
const EmpruntService = require('./emprunt.service');

class DemandeEmpruntService {
  static async createDemande(utilisateurId, equipementId, dateRetourPrevu) {
    const equipementIdInt = parseInt(equipementId, 10);
    const utilisateurIdInt = parseInt(utilisateurId, 10);
    
    // Vérifier si équipement existe et est dispo
    const equipement = await prisma.equipement.findUnique({ where: { id: equipementIdInt } });
    if (!equipement) throw new Error("Équipement introuvable");
    if (equipement.etat !== "Disponible") throw new Error("Équipement non disponible");

    // Changer temporairement l'état à EnMaintenance
    
    // Créer la demande
    const demande = await prisma.demandeEmprunt.create({
      data: { 
        utilisateur: { connect: { id: utilisateurIdInt } },
        equipement: {connect: { id: equipementIdInt } },
        dateRetourPrevu: new Date(dateRetourPrevu), 
        statut: "enAttente" },
      });
      
    await prisma.equipement.update({
      where: { id: equipementIdInt },
      data: { etat: "EnMaintenance" },
    });
      
    return await prisma.demandeEmprunt.findUnique({
      where: { id: demande.id },
      include: { utilisateur: true, equipement: true },
    });;
  }

  static async getAllDemandes() {
    const res = await prisma.demandeEmprunt.findMany({
      include: {
        utilisateur: { select: { nom: true, prenom: true, email: true } },
        equipement: { select: { nom: true, type: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return res;
  }

  static async getUserDemandes(userId) {
    const demandes = await prisma.demandeEmprunt.findMany({
      where: { 
        utilisateurId: userId,
        statut: "enAttente"
      },
      orderBy: { dateDemande: "desc" },
      include: {
        equipement: { select: { nom: true } }
      },
    });

    return demandes;
  }

  static async approuverDemande(id) {
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id } });
    if (!demande) throw new Error("Demande introuvable");

    // Créer l’emprunt réel
    const emprunt = await EmpruntService.createEmprunt(
      {
        equipementId: demande.equipementId,
        dateRetourPrevu: demande.dateRetourPrevu,
      },
      demande.utilisateurId
    );

    // Changer statut de la demande et équipement
    await prisma.demandeEmprunt.update({
      where: { id },
      data: { statut: "approuver" },
    });

    await prisma.equipement.update({
      where: { id: demande.equipementId },
      data: { etat: "Emprunter" },
    });

    return { message: "Demande approuvée et emprunt créé", emprunt: emprunt };
  }

  static async refuserDemande(id) {
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.demandeEmprunt.update({
      where: { id },
      data: { statut: "refuser" },
    });

    // Remettre équipement en dispo
    await prisma.equipement.update({
      where: { id: demande.equipementId },
      data: { etat: "Disponible" },
    });

    return { message: "Demande refusée" };
  }

  static async AnnulerDemande(id) {
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.equipement.update({
      where: { id: demande.equipementId },
      data: { etat: "Disponible" },
    });

    const demandeId = parseInt(id, 10);
    
    await prisma.demandeEmprunt.delete({
      where: {id: demandeId}
    });
  }
}

module.exports = DemandeEmpruntService;
