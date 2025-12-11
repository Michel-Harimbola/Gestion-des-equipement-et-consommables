const prisma = require("../lib/prisma.js");

class RapportService {
    static async generateMonthlyReport() {
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);

        const endOfMonth = new Date();
        endOfMonth.setMonth(endOfMonth.getMonth() + 1);
        endOfMonth.setDate(0);
        endOfMonth.setHours(23, 59, 59, 999);


        // 1. Récupérer les stats
        const utilisationEquipements = await prisma.emprunt.count({
            where: {
                dateEmprunt: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            }
        });

        const consommation = await prisma.utilisationConsommable.aggregate({
            _sum: { quantiteUtilise: true },
            where: {
                createdAt: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            }
        });

        const stockDisponible = await prisma.consommable.count({
            where: { quantiteDisponible: { gt: 0 } }
        });

        // 2. Construire le contenu
        const contenu = {
            periode: "Mois " + (startOfMonth.getMonth() + 1),
            utilisationEquipements,
            consommationTotale: consommation._sum.quantite || 0,
            stockDisponible,
        };

        // 3. Sauvegarder en base
        const rapport = await prisma.rapport.create({
            data: {
                contenu: JSON.stringify(contenu),
                periode: "Mensuel"
            }
        });

        return rapport;
    }

    static async getAllRapports({ page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;

        const [rapports, total] = await Promise.all([
            prisma.rapport.findMany({
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.rapport.count()
        ]);

        return { rapports, total, page, limit };
    }

    static async deleteRapport(id) {
        const idRapport = parseInt(id, 10);

        if(isNaN(idRapport)) throw new Error("id invalide"); 

        await prisma.rapport.delete({
            where: { id: idRapport }
        });
    }
}

module.exports = RapportService;
