const EquipementService = require("../services/equipement.service.js");

exports.createEquipement = async (req, res) => {
    try {
        const result = await EquipementService.createEquipement(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getEquipementById = async (req, res) => {
    try {
        const result = await EquipementService.getEquipementById(req.params.id);
        if(!result) throw new Error("Equipement non trouvé");
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllEquipements = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await EquipementService.getAllEquipements({ page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateEquipement = async (req, res) => {
    try {
        const result = await EquipementService.updateEquipement(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEquipement = async (req, res) => {
    try {
        const result = await EquipementService.deleteEquipement(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}