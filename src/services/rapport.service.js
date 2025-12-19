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


        // Emprunts
        const totalEmprunts = await prisma.emprunt.count({
            where: {
                dateEmprunt: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            }
        });

        const empruntsEnCours = await prisma.emprunt.count({
            where: { statut: "EnCours" },
        });

        const empruntsEnRetard = await prisma.emprunt.count({
            where: { statut: "EnRetard" },
        });

        const empruntsRetournes = await prisma.emprunt.count({
            where: { statut: "Retourner" },
        });

        // Consommation
        const consommation = await prisma.utilisationConsommable.aggregate({
            _sum: { quantiteUtilise: true },
            where: {
                createdAt: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            }
        });

        // Stock et alertes
        const stockDisponible = await prisma.consommable.count({
            where: { quantiteDisponible: { gt: 0 } },
        });

        const stockCritique = await prisma.consommable.findMany({
            where: {
                quantiteDisponible: {
                    lte: prisma.consommable.fields.seuilCritique,
                },
            },
            select: {
                id: true,
                nom: true,
                quantiteDisponible: true,
                seuilCritique: true,
            },
        });

        // Construire le contenu
        const contenu = {
            periode: {
                debut: startOfMonth,
                fin: endOfMonth,
                type: "Mensuel",
            },

            emprunts: {
                total: totalEmprunts,
                enCours: empruntsEnCours,
                enRetard: empruntsEnRetard,
                retournes: empruntsRetournes,
            },

            consommation: {
                quantiteTotaleUtilisee: consommation._sum.quantiteUtilise || 0,
            },

            stock: {
                consommablesDisponibles: stockDisponible,
                alertesStockCritique: stockCritique,
            },

            meta: {
                genereLe: new Date(),
                version: "1.0",
            },
        };

        // Sauvegarder en base
        const rapport = await prisma.rapport.create({
            data: {
                contenu: JSON.stringify(contenu, null, 1),
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
