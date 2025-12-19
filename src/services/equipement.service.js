const prisma = require("../lib/prisma.js");

class EquipementService {
    static async createEquipement(data, file) {
        const {nom, numeroDeSerie, marque, disponibilite, etatMateriel, obtention, prix, fournisseur, donateur} = data;
        const equipement = await prisma.equipement.create({
            data: {
                nom: nom, 
                numeroDeSerie: numeroDeSerie,
                marque: marque,
                disponibilite: disponibilite,
                etatMateriel: etatMateriel,
                obtention: obtention,
                prix: Number(prix),
                fournisseur: fournisseur,
                donateur: donateur,
                photo: file ? `/uploads/equipements/${file.filename}` : null,
            },
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
                obtention: true,
                prix: true,
                fournisseur: true,
                donateur: true,
                photo: true,
            },
        });
        if(!equipement) throw new Error("Equipement non trouvé");

        return equipement;
    }

    static async getAllEquipements({ page = 1, limit = 12 }) {
        const skip = (page - 1) * limit;

        const [equipements, total] = await Promise.all([
            prisma.equipement.findMany({
                select: {
                    id: true,
                    nom: true,
                    numeroDeSerie: true,
                    marque: true,
                    disponibilite: true,
                    etatMateriel: true,
                    obtention: true,
                    prix: true,
                    fournisseur: true,
                    donateur: true,
                    photo: true,
                },
                skip,
                take: limit,
            }),
            prisma.equipement.count()
        ]);

        const ordreDisponibilite = ["Disponible", "EnMaintenance", "Emprunte", "Indisponible"];
        equipements.sort((a, b) => {
            return ordreDisponibilite.indexOf(a.disponibilite) - ordreDisponibilite.indexOf(b.disponibilite);
        })

        return { equipements, total, page, limit };
    }

    static async searchEquipements(q, page = 1, limit = 12) {
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 12;
        const skip = (page - 1) * limit;

        const where = {
            OR: [
                { nom: { contains: q, mode: "insensitive" } },
                { marque: { contains: q, mode: "insensitive" } },
                { numeroDeSerie: { contains: q, mode: "insensitive" } }
            ]
        };

        const [equipements, total] = await Promise.all([
            prisma.equipement.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" }
            }),
            prisma.equipement.count({ where })
        ]);

        return { equipements, total, page, limit };
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