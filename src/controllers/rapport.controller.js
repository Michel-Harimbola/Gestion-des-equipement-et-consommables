const RapportService = require("../services/rapport.service.js");

exports.generateMonthlyReport = async (req, res) => {
    try {
        const rapport = await RapportService.generateMonthlyReport();
        res.json({ message: "Rapport mensuel généré", rapport });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllRapports = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const result = await RapportService.getAllRapports({ page, limit });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteRapport = async (req, res) => {
    try {
        const result = await RapportService.deleteRapport(req.params.id);
        res.status(204).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
