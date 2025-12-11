const empruntService = require("../services/emprunt.service.js");

exports.createEmprunt = async (req, res) => {
    try {
        const result = await empruntService.createEmprunt(req.body, req.user.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getEmpruntById = async (req, res) => {
    try {
        const result = await empruntService.getEmpruntById(req.params.id);
        if(!emprunt) throw new Error(" emprunt non trouvé");
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getAllEmprunts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await empruntService.getAllEmprunts({ page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getUserEmprunts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await empruntService.getUserEmprunts(req.user.id, { page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.searchEmprunts = async (req, res) => {
    try {
        const { q = "", page = 1, limit = 12 } = req.query;
        const result = await empruntService.searchEmprunts(q, parseInt(page), parseInt(limit));
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchUserEmprunts = async (req, res) => {
    try {
        const { q = "", page = 1, limit = 12 } = req.query;
        const result = await empruntService.searchUserEmprunts(req.user.id, q, parseInt(page), parseInt(limit));
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserEmpruntsInProgress = async (req, res) => {
    try {
        const result = await empruntService.getUserEmpruntsInProgress(req.user.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getRecentEmprunts = async (req, res) => {
    try {
        const result = await empruntService.getRecentEmprunts();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEmprunt = async (req, res) => {
    try {
        const result = await empruntService.updateEmprunt(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.returnEmprunt = async (req, res) => {
    try {
        const result = await empruntService.returnEmprunt(req.params.id, req.user.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEmprunt = async (req, res) => {
    try{
        const result = await empruntService.deleteEmprunt(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}