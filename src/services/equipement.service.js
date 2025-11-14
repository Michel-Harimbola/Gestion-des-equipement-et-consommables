const prisma = require("../lib/prisma.js");

class EquipementService {
    static async createEquipement(data) {
        const equipement = await prisma.equipement.create({
            data,
        });

        return equipement;
    }

    static async getEquipementById(id) {
        const equipementId = parseInt(id, 10);
        if(isNaN(equipementId)) throw new Error("ID invalide");

        const equipement = await prisma.equipement.findUnique({
            where: { id: equipementId },
            select: {
                id: true,
                nom: true,
                numeroDeSerie: true,
                marque: true,
                disponibilite: true,
                etatMateriel: true,
            },
        });
        if(!equipement) throw new Error("Equipement non trouvé");

        return equipement;
    }

    static async getAllEquipements() {
        const equipements = await prisma.equipement.findMany({
            select: {
                id: true,
                nom: true,
                numeroDeSerie: true,
                marque: true,
                disponibilite: true,
                etatMateriel: true,
            },
        });
        const ordreDisponibilite = ["Disponible", "EnMaintenance", "Emprunte", "Indisponible"];
        equipements.sort((a, b) => {
            return ordreDisponibilite.indexOf(a.disponibilite) - ordreDisponibilite.indexOf(b.disponibilite);
        })

        return equipements;
    }

    static async updateEquipement(id, data) {
        const equipementId = parseInt(id, 10);
        if(isNaN(equipementId)) throw new Error("ID invalide");

        if(data.disponibilite =="Emprunte") {
            throw new Error("L'état 'Emprunté' est géré via le service d'emprunt.");
        }

        const equipement = await prisma.equipement.update({
            where: {id: equipementId },
            data
        });

        return equipement;
    }

    static async deleteEquipement(id) {
        const equipementId = parseInt(id, 10);
        if(isNaN(equipementId)) throw new Error("ID invalide");

        await prisma.equipement.delete({
            where: { id: equipementId }
        });
    }
};


module.exports = EquipementService;