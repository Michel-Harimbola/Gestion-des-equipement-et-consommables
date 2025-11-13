const UtilisationConsommableService = require("../services/utilisationConsommable.service");

class UtilisationConsommableController {
  static async create(req, res, io) {
    try {
      const utilisation = await UtilisationConsommableService.createUtilisation(req.body, io);
      res.status(201).json(utilisation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const utilisations = await UtilisationConsommableService.getAllUtilisations();
      res.json(utilisations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UtilisationConsommableController;
