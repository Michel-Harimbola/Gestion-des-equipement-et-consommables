const UtilisationConsommableService = require("../services/utilisationConsommable.service.js");


exports.create = async (req, res, io) => {
  try {
    const result = await UtilisationConsommableService.create(req.user.id, req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const result = await UtilisationConsommableService.getAll({ page, limit });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getById = async (req, res) => {
  try {
    const result = await UtilisationConsommableService.getById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

exports.update = async (req, res) => { 
  try {
    const result = await UtilisationConsommableService.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.delete = async (req, res) => {
  try {
    await UtilisationConsommableService.delete(req.params.id);
    res.json({ message: "Utilisation supprimée avec succès" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

