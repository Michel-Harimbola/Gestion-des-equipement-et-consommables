const DemandeEmpruntService = require("../services/demandeEmprunt.service");

exports.createDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.createDemande(req.user.id, req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.demandeRetour = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.demandeRetour(req.user.id, req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDemandes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const result = await DemandeEmpruntService.getAllDemandes({ page, limit });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchDemandeEmprunts = async (req, res) => {
    try {
        const { q = "", page = 1, limit = 12 } = req.query;
        const result = await DemandeEmpruntService.searchDemandeEmprunts(q, parseInt(page), parseInt(limit));
        res.json(result);
    } catch (err) {
        console.error("Erreur recherche demande d'emprunt:", err);
        res.status(500).json({ error: "Erreur interne serveur" });
    }
};

exports.getDemandesEnAttente = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const result = await DemandeEmpruntService.getDemandesEnAttente({ page, limit });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserDemandes = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.getUserDemandes(req.user.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.updateDemande(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.approuverDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.approuverDemande(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.refuserDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.refuserDemande(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.AnnulerDemande = async (req, res) => {
  try {
    const result = await DemandeEmpruntService.annulerDemande(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};