const prisma = require("../lib/prisma");
const EmpruntService = require('./emprunt.service');

class DemandeEmpruntService {
  // demande d'emprunt
  static async createDemande (utilisateurId, data) {
    const { dateRetourPrevu, usage, equipementId } = data;
    const equipementIdInt = parseInt(equipementId, 10);
    const utilisateurIdInt = parseInt(utilisateurId, 10);
    
    // Vérifier si équipement existe et dispo
    const equipement = await prisma.equipement.findUnique({ where: { id: equipementIdInt } });
    if (!equipement) throw new Error("Équipement introuvable");
    if (equipement.disponibilite !== "Disponible") throw new Error("Équipement non disponible");

    if (new Date(dateRetourPrevu) <= new Date()) {
        throw new Error("La date de retour prévue doit être future.");
    }
    
    // Créer la demande
    const demande = await prisma.demandeEmprunt.create({
      data: { 
        utilisateur: { connect: { id: utilisateurIdInt } },
        equipement: {connect: { id: equipementIdInt } },
        dateRetourPrevu: new Date(dateRetourPrevu), 
        usage: usage,
        statut: "enAttente" ,
        type: "EMPRUNT"
      },
      include: {
        utilisateur: true,
        equipement: true,
      },
      });

    // Changer temporairement l'état à EnMaintenance
    await prisma.equipement.update({
      where: { id: equipementIdInt },
      data: { disponibilite: "EnMaintenance" },
    });
      
    return await prisma.demandeEmprunt.findUnique({
      where: { id: demande.id },
      include: { utilisateur: true, equipement: true },
    });;
  }

   // Demande de retour
  static async demandeRetour(utilisateurId, data) {
    const { equipementId, empruntId } = data;
    const utilisateurIdInt = parseInt(utilisateurId, 10);
    const equipementIdInt = parseInt(equipementId, 10);
    const empruntIdInt = parseInt(empruntId, 10);

    // Vérifie l’emprunt actif
    const emprunt = await prisma.emprunt.findFirst({
      where: {
        id: empruntIdInt,
        utilisateurId: utilisateurIdInt,
        statut: "EnCours",
        equipement: {
          some: { id: equipementIdInt },
        },
      },
      include: { equipement: true },
    });

    if (!emprunt) {
      throw new Error("Aucun emprunt en cours pour cet équipement.");
    }

    // Vérifie qu’il n’y a pas déjà une demande de retour pour ce matériel
    const demandeExistante = await prisma.demandeEmprunt.findFirst({
      where: {
        utilisateurId: utilisateurIdInt,
        equipementId: equipementIdInt,
        type: "RETOUR",
        statut: "enAttente",
      },
    });

    if (demandeExistante)
      throw new Error("Une demande de retour est déjà en attente pour cet équipement.");

    // Crée la demande de retour
    const demandeRetour = await prisma.demandeEmprunt.create({
      data: {
        utilisateurId: utilisateurIdInt,
        equipementId: equipementIdInt,
        dateRetourPrevu: emprunt.dateRetourPrevu,
        usage: emprunt.usage,
        statut: "enAttente",
        type: "RETOUR",
      },
    });

    await prisma.equipement.update({
      where: { id: equipementIdInt },
      data: { disponibilite: "EnMaintenance" },
    });

    return prisma.demandeEmprunt.findUnique({
      where: { id: demandeRetour.id },
      include: {
        utilisateur: { select: { nom: true, prenom: true } },
        equipement: { select: { nom: true, numeroDeSerie: true, marque: true } },
      },
    });
  }

  static async getAllDemandes() {
    const res = await prisma.demandeEmprunt.findMany({
      include: {
        utilisateur: { select: { nom: true, prenom: true, email: true } },
        equipement: { select: { nom: true, numeroDeSerie: true, marque: true , etatMateriel: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return res;
  }

  static async getUserDemandes (userId) {
    const demandes = await prisma.demandeEmprunt.findMany({
      where: { 
        utilisateurId: userId,
        statut: "enAttente"
      },
      orderBy: { dateDemande: "desc" },
      include: {
        equipement: { select: { nom: true, numeroDeSerie: true, marque: true, etatMateriel: true } }
      },
    });

    return demandes;
  }

  static async updateDemande (id, data) {
    const demandeId = parseInt(id, 10);
    if(isNaN(demandeId)) throw new Error("ID invalide");
    const demande = await prisma.demandeEmprunt.update({
        where: { id: demandeId },
        data,
        include: {
            utilisateur: { 
                select: { nom: true, prenom: true, email: true },
             },
            equipement: {
              select: { nom: true }
            }
        },
    });
    return demande;
  }

  // Approuver une demande (emprunt ou retour)
  static async approuverDemande(id) {
    const demandeId = parseInt(id, 10);
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id: demandeId } });
    if (!demande) throw new Error("Demande introuvable");

    if (demande.type === "EMPRUNT") {
      const emprunt = await EmpruntService.createEmprunt(
        {
          equipementId: demande.equipementId,
          dateRetourPrevu: demande.dateRetourPrevu,
          usage: demande.usage,
        },
        demande.utilisateurId
      );

      await prisma.demandeEmprunt.update({
        where: { id: demandeId },
        data: { statut: "approuver" },
      });

      return {
        message: "Demande d'emprunt approuvée et emprunt créé.",
        emprunt,
      };

    } else if (demande.type === "RETOUR") {
      const emprunt = await prisma.emprunt.findFirst({
        where: {
          utilisateurId: demande.utilisateurId,
          equipement: { some: { id: demande.equipementId } },
          statut: "EnCours",
        },
      });

      if (!emprunt) throw new Error("Aucun emprunt en cours pour ce matériel.");

      // Marquer comme retourné
      await EmpruntService.returnEmprunt(emprunt.id, demande.utilisateurId);

      // Mettre la demande à approuvée
      await prisma.demandeEmprunt.update({
        where: { id: demandeId },
        data: { statut: "approuver" },
      });

      return {
        message: "Demande de retour approuvée. Équipement marqué comme retourné.",
      };
    }
  }

  // Refuser une demande (emprunt ou retour)
  static async refuserDemande(id) {
    const demandeId = parseInt(id, 10);
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id: demandeId } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.demandeEmprunt.update({
      where: { id: demandeId },
      data: { statut: "refuser" },
    });

    if (demande.type === "EMPRUNT") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Disponible" },
      });

    } else if (demande.type === "RETOUR") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Emprunter" },
      });
    }

    return { message: "Demande refusée avec succès." };
  }

  // Annuler une demande (par utilisateur)
  static async annulerDemande(id) {
    const demandeId = parseInt(id, 10);
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id: demandeId } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.demandeEmprunt.delete({
      where: { id: demandeId }
    });

    // Libérer le matériel
    if (demande.type === "EMPRUNT") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Disponible" },
      });
    }

    // Garder l'état en "Emprunter"
    if (demande.type === "RETOUR") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Emprunter" },
      });
    }
  }
}

module.exports = DemandeEmpruntService;
