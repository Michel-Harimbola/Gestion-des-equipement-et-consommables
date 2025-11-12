const UtilisationConsommableService = require("../services/utilisationConsommable.service.js");


exports.create = async (req, res) => {
  try {
    const utilisation = await UtilisationConsommableService.create(req.user.id, req.body);
    res.status(201).json(utilisation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.getAll = async (req, res) => {
  try {
    const utilisations = await UtilisationConsommableService.getAll();
    res.json(utilisations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getById = async (req, res) => {
  try {
    const utilisation = await UtilisationConsommableService.getById(req.params.id);
    res.json(utilisation);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

exports.update = async (req, res) => { 
  try {
    const utilisation = await UtilisationConsommableService.update(req.params.id, req.body);
    res.json(utilisation);
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

