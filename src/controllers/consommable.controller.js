const ConsommableService = require("../services/consommable.service.js");

exports.createConsommable = async (req, res) => {
    try {
        const consommable = await ConsommableService.createConsommable(req.body);
        res.status(201).json(consommable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getConsommableById = async (req, res) => {
    try {
        const consommable = await ConsommableService.getConsommableById(req.params.id);
        if(!consommable) throw new Error("Consommable non trouvé");
        res.status(200).json(consommable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllConsommables = async (req, res) => {
    try {
        const consommables = await ConsommableService.getAllConsommables();
        res.status(200).json(consommables);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateConsommable = async (req, res) => {
    try {
        const consommable = await ConsommableService.updateConsommable(req.params.id, req.body);
        res.status(200).json(consommable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteConsommable = async (req, res) => {
    try {
        const consommable = await ConsommableService.deleteConsommable(req.params.id);
        res.status(204).json(consommable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}