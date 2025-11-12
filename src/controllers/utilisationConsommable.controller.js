import UtilisationConsommableService from "../services/utilisationConsommable.service.js";

export default class UtilisationConsommableController {
  static async create(req, res) {
    try {
      const utilisation = await UtilisationConsommableService.create(req.body);
      res.status(201).json(utilisation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const utilisations = await UtilisationConsommableService.getAll();
      res.json(utilisations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const utilisation = await UtilisationConsommableService.getById(req.params.id);
      res.json(utilisation);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const utilisation = await UtilisationConsommableService.update(req.params.id, req.body);
      res.json(utilisation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await UtilisationConsommableService.delete(req.params.id);
      res.json({ message: "Utilisation supprimée avec succès" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
