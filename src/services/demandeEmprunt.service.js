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
        statut: { in: ["EnCours", "EnRetard"] },
        equipement: { id: equipementIdInt },
      },
      include: { equipement: true },
    });

    if (!emprunt) {
      throw new Error("Aucun emprunt en cours ou en retard pour cet équipement.");
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

    await prisma.emprunt.update({
      where: { id: empruntIdInt },
      data: { statut: "EnAttente" },
    });

    return prisma.demandeEmprunt.findUnique({
      where: { id: demandeRetour.id },
      include: {
        utilisateur: { select: { nom: true, prenom: true } },
        equipement: { select: { nom: true, numeroDeSerie: true, marque: true } },
      },
    });
  }

  static async getAllDemandes({ page = 1, limit = 12 }) {
    const skip = (page - 1) * limit;

    const [demandes, total] = await Promise.all([
      prisma.demandeEmprunt.findMany({
        include: {
          utilisateur: { select: { nom: true, prenom: true, email: true } },
          equipement: { select: { nom: true, numeroDeSerie: true, marque: true, etatMateriel: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.demandeEmprunt.count()
    ]);

    return { demandes, total, page, limit };
  }

  static async getDemandesEnAttente({ page = 1, limit = 3 }) {
    const skip = (page - 1) * limit;

    const [demandes, total] = await Promise.all([
      prisma.demandeEmprunt.findMany({
        where: { statut: "enAttente" },
        include: {
          utilisateur: { select: { nom: true, prenom: true, email: true } },
          equipement: { select: { nom: true, numeroDeSerie: true, marque: true, etatMateriel: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.demandeEmprunt.count({
        where: { statut: "enAttente" },
      })
    ]);

    return { demandes, total, page, limit };
  }

  static async searchDemandeEmprunts(q, page = 1, limit = 12) {
      page = parseInt(page, 10) || 1;
      limit = parseInt(limit, 10) || 12;
      const skip = (page - 1) * limit;

      const where = {
          OR: [
              { utilisateur: { nom: { contains: q, mode: "insensitive" } } },
              { utilisateur: { prenom: { contains: q, mode: "insensitive" } } },

              { equipement: { nom: { contains: q, mode: "insensitive" } } },
              { equipement: { marque: { contains: q, mode: "insensitive" } } },
              { equipement: { numeroDeSerie: { contains: q, mode: "insensitive" } } },
          ]
      };

      const [demandes, total] = await Promise.all([
          prisma.demandeEmprunt.findMany({
              where,
              skip,
              take: limit,
              orderBy: { dateDemande: "desc" },
              include: {
                  utilisateur: {
                      select: { nom: true, prenom: true, email: true }
                  },
                  equipement: {
                      select: { nom: true, marque: true, numeroDeSerie: true, etatMateriel: true }
                  }
              }
          }),
          prisma.demandeEmprunt.count({ where })
      ]);

      return { demandes, total, page, limit };
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
      
      await prisma.demandeEmprunt.update({
        where: { id: demandeId },
        data: { statut: "approuver" },
      });

      const emprunt = await EmpruntService.createEmprunt(
        {
          equipementId: demande.equipementId,
          dateRetourPrevu: demande.dateRetourPrevu,
          usage: demande.usage,
        },
        demande.utilisateurId
      );


      return {
        message: "Demande d'emprunt approuvée et emprunt créé.",
        emprunt,
      };

    } else if (demande.type === "RETOUR") {
      const emprunt = await prisma.emprunt.findFirst({
        where: {
          utilisateurId: demande.utilisateurId,
          equipementId: demande.equipementId,
          statut: { in: ["EnCours", "EnRetard", "EnAttente"] },
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
        data: { disponibilite: "Emprunte" },
      });

      const emprunt = await prisma.emprunt.findFirst({
        where: {
          utilisateurId: demande.utilisateurId,
          equipementId: demande.equipementId,
          statut: "EnAttente", // car tu as mis EnAttente lors de la demande retour
        },
      });

      if (emprunt) {
        const now = new Date();
        const dateRetourPrevu = new Date(emprunt.dateRetourPrevu);

        const newStatus = now > dateRetourPrevu ? "EnRetard" : "EnCours";

        await prisma.emprunt.update({
          where: { id: emprunt.id },
          data: { statut: newStatus },
        });
      }
    }

    return { message: "Demande refusée avec succès." };
  }

  static async annulerDemande(id) {
    const demandeId = parseInt(id, 10);
    const demande = await prisma.demandeEmprunt.findUnique({ where: { id: demandeId } });
    if (!demande) throw new Error("Demande introuvable");

    await prisma.demandeEmprunt.delete({
      where: { id: demandeId }
    });

    if (demande.type === "EMPRUNT") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Disponible" },
      });
    }

    if (demande.type === "RETOUR") {
      await prisma.equipement.update({
        where: { id: demande.equipementId },
        data: { disponibilite: "Emprunte" },
      });

      const emprunt = await prisma.emprunt.findFirst({
        where: {
          utilisateurId: demande.utilisateurId,
          equipementId: demande.equipementId,
          statut: "EnAttente",
        },
      });

      if (emprunt) {
        const now = new Date();
        const dateRetourPrevu = new Date(emprunt.dateRetourPrevu);

        const newStatus = now > dateRetourPrevu ? "EnRetard" : "EnCours";

        await prisma.emprunt.update({
          where: { id: emprunt.id },
          data: { statut: newStatus },
        });
      }
    }
  }
}

module.exports = DemandeEmpruntService;
