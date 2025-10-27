const EquipementService = require("../services/equipement.service.js");

exports.createEquipement = async (req, res) => {
    try {
        const equipement = await EquipementService.createEquipement(req.body);
        res.status(201).json(equipement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getEquipementById = async (req, res) => {
    try {
        const equipement = await EquipementService.getEquipementById(req.params.id);
        if(!equipement) throw new Error("Equipement non trouvé");
        res.status(200).json(equipement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllEquipements = async (req, res) => {
    try {
        const equipements = await EquipementService.getAllEquipements();
        res.status(200).json(equipements);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateEquipement = async (req, res) => {
    try {
        const equipement = await EquipementService.updateEquipement(req.params.id, req,body);
        res.status(200).json(equipement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEquipement = async (req, res) => {
    try {
        const equipement = await EquipementService.deleteEquipement(req.params.id);
        res.status(204).json(equipement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}