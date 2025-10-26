const prisma = require("../lib/prisma.js");

class EmpruntService {
    static async createService (dateRetourPrevu, status) {
        const emprunt = await prisma.emprunt.create({
            data: {
                dateRetourPrevu,
                status,
            },
        });

        return emprunt;
    }

    static async getEmpruntById (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide ou non trouvé");

        const emprunt = await prisma.emprunt.findUnique({
            where: { id: empruntId },
            select: {
                dateEmprunt: true,
                dateRetourPrevu: true,
                statut: true,
            },
        });

        return emprunt;
    }

    static async getAllEmprunts () {
        const emprunts = await prisma.emprunt.findMany({
            select: {
                dateEmprunt: true,
                dateRetourPrevu: true,
                statut: true,
            },
        });

        return emprunts
    }

    static async updateEmprunt (id, data) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide");

        const emprunt = await prisma.emprunt.update({
            where: { id: empruntId },
            data,
        });

        return emprunt;
    }

    static async deleteEmprunt (id) {
        const empruntId = parseInt(id, 10);
        if(isNaN(empruntId)) throw new Error("ID invalide");

        await prisma.emprunt.delete({
            where: { id: empruntId },
        });
    }
}

module.exports = EmpruntService;