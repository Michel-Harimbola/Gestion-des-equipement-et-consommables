const prisma = require("../lib/prisma.js");

class ConsommableService {
    static async createConsommable(data) {
        const consommable = await prisma.consommable.create({
            data,
        });

        return consommable;
    }

    static async getConsommableById(id) {
        const consommableId = parseInt(id, 10);
        if(isNaN(consommableId)) throw new Error("ID invalide");

        const consommable = await prisma.consommable.findUnique({
            where: { id: consommableId },
            select: {
                id: true,
                nom: true,
                quantiteDisponible: true,
                seuilCritique: true,
                obtention: true,
                fournisseur: true,
                donnateur: true,
            },
        });
        if(!consommable) throw new Error("Consommable non trouvé");

        return consommable;
    }

    static async getAllConsommables({ page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;

        const [consommables, total] = await Promise.all([
            prisma.consommable.findMany({
                select: {
                    id: true,
                    nom: true,
                    quantiteDisponible: true,
                    seuilCritique: true,
                    obtention: true,
                    fournisseur: true,
                    donnateur: true,
                },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.consommable.count()
        ]);

        return { consommables, total, page, limit };
    }

    static async updateConsommable(id, data) {
        const consommableId = parseInt(id, 10);
        if(isNaN(consommableId)) throw new Error("ID invalide");

        const consommable = await prisma.consommable.update({
            where: {id: consommableId },
            data
        });

        return consommable;
    }

    static async deleteConsommable(id) {
        const consommableId = parseInt(id, 10);
        if(isNaN(consommableId)) throw new Error("ID invalide");

        await prisma.consommable.delete({
            where: { id: consommableId }
        });
    }
};


module.exports = ConsommableService;