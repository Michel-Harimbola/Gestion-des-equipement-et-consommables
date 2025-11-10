const DemandeEmpruntService = require("../services/demandeEmprunt.service");

exports.createDemande = async (req, res) => {
  try {
    const userId = req.user.id; // récupéré depuis le token
    const { equipementId, dateRetourPrevu } = req.body;

    const demande = await DemandeEmpruntService.createDemande(userId, equipementId, dateRetourPrevu);
    res.status(201).json(demande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDemandes = async (req, res) => {
  try {
    const demandes = await DemandeEmpruntService.getAllDemandes();
    res.status(200).json(demandes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserDemandes = async (req, res) => {
  try {
    const demandes = await DemandeEmpruntService.getUserDemandes(req.user.id);
    res.status(200).json(demandes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.updateDemande(parseInt(req.params.id, req.body));
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.approuverDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.approuverDemande(parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.refuserDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.refuserDemande(parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.AnnulerDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.AnnulerDemande(parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};