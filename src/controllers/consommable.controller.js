const ConsommableService = require("../services/consommable.service.js");

exports.createConsommable = async (req, res) => {
    try {
        const result = await ConsommableService.createConsommable(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getConsommableById = async (req, res) => {
    try {
        const result = await ConsommableService.getConsommableById(req.params.id);
        if(!result) throw new Error("Consommable non trouvé");
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllConsommables = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await ConsommableService.getAllConsommables({ page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateConsommable = async (req, res) => {
    try {
        const result = await ConsommableService.updateConsommable(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteConsommable = async (req, res) => {
    try {
        const result = await ConsommableService.deleteConsommable(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}