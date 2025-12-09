const prisma = require("../lib/prisma");

class DashboardService {
  static async getDashboardStats() {
    const totalUsers = await prisma.utilisateur.count();

    const empruntsEnCours = await prisma.emprunt.count({
      where: {
        OR: [
          { statut: "EnCours" },
          { dateRetourEffective: null }
        ]
      }
    });

    const consommablesCritiques = await prisma.consommable.count({
      where: {
        quantiteDisponible: {
          lte: prisma.consommable.fields.seuilCritique
        }
      }
    });

    return {
      totalUsers,
      empruntsEnCours,
      consommablesCritiques,
    };
  }

  static async getEmpruntsParMois() {
    const currentYear = new Date().getFullYear();

    // On récupère tous les emprunts de l'année en cours
    const emprunts = await prisma.emprunt.findMany({
      where: {
        dateEmprunt: {
          gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00.000Z`),
        },
      },
      select: {
        dateEmprunt: true,
      },
    });

    // Initialisation des mois à 0
    const empruntsParMois = Array(12).fill(0);

    // Comptage des emprunts par mois
    emprunts.forEach(e => {
      const month = new Date(e.dateEmprunt).getMonth(); // 0=Jan, 11=Dec
      empruntsParMois[month]++;
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return { months, emprunts: empruntsParMois };
  }

  static async getEquipementsStatus() {
    const disponibles = await prisma.equipement.count({
        where: { disponibilite: "Disponible" }
    });

    const empruntes = await prisma.equipement.count({
        where: { disponibilite: "Emprunte" }
    });

    const maintenance = await prisma.equipement.count({
        where: { disponibilite: "EnMaintenance" }
    });

    return {
        disponibles,
        empruntes,
        maintenance,
    };
  }
}

module.exports = DashboardService;
