const empruntService = require("../services/emprunt.service.js");

exports.createEmprunt = async (req, res) => {
    try {
        const emprunt = await empruntService.createEmprunt(req.body, req.user.id);
        res.status(201).json(emprunt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getEmpruntById = async (req, res) => {
    try {
        const emprunt = await empruntService.getEmpruntById(req.params.id);
        if(!emprunt) throw new Error(" emprunt non trouvé");
        res.status(200).json(emprunt);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getAllEmprunts = async (req, res) => {
    try {
        const emprunt = await empruntService.getAllEmprunts();
        res.status(200).json(emprunt);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getUserEmprunts = async (req, res) => {
    try {
        const emprunts = await empruntService.getUserEmprunts(req.user.id);
        res.status(200).json(emprunts);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getUserEmpruntsInProgress = async (req, res) => {
    try {
        const emprunts = await empruntService.getUserEmpruntsInProgress(req.user.id);
        res.status(200).json(emprunts);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getRecentEmprunts = async (req, res) => {
    try {
        const data = await empruntService.getRecentEmprunts();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEmprunt = async (req, res) => {
    try {
        const emprunt = await empruntService.updateEmprunt(req.params.id, req.body);
        res.status(200).json(emprunt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.returnEmprunt = async (req, res) => {
    try {
        const emprunt = await empruntService.returnEmprunt(req.params.id, req.user.id);
        res.status(200).json(emprunt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteEmprunt = async (req, res) => {
    try{
        const emprunt = await empruntService.deleteEmprunt(req.params.id);
        res.status(204).json(emprunt);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}