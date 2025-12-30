const prisma = require("../lib/prisma.js");

class ConsommableService {
    static async createConsommable(data, file) {
        const {nom, marque, quantiteDisponible, seuilCritique, obtention, categorie, fournisseur, donnateur} = data;
        const consommable = await prisma.consommable.create({
            data: {
                nom: nom,
                marque: marque,
                quantiteDisponible: Number(quantiteDisponible),
                seuilCritique: Number(seuilCritique),
                obtention: obtention,
                categorie: categorie,
                fournisseur: fournisseur,
                donnateur: donnateur,
                photo: file ? `/uploads/consommables/${file.filename}` : null,
            },
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
                marque: true,
                quantiteDisponible: true,
                seuilCritique: true,
                obtention: true,
                categorie: true,
                fournisseur: true,
                donnateur: true,
                photo: true,
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
                    marque: true,
                    quantiteDisponible: true,
                    seuilCritique: true,
                    obtention: true,
                    categorie: true,
                    fournisseur: true,
                    donnateur: true,
                    photo: true,
                },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.consommable.count()
        ]);

        return { consommables, total, page, limit };
    }

    static async searchConsommables(q, page = 1, limit = 12) {
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 12;
        const skip = (page - 1) * limit;

        const where = {
            OR: [
                { nom: { contains: q, mode: "insensitive" } },
            ]
        };

        const [consommables, total] = await Promise.all([
            prisma.consommable.findMany({
                where,
                select: {
                    id: true,
                    nom: true,
                    marque: true,
                    quantiteDisponible: true,
                    seuilCritique: true,
                    obtention: true,
                    categorie: true,
                    fournisseur: true,
                    donnateur: true,
                    photo: true,
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