const express = require("express");
const auth = require("../middlewares/authMiddleware.js");
const DemandeEmpruntController = require("../controllers/demandeEmprunt.controller");

const router = express.Router();

router.post("/emprunt", auth, DemandeEmpruntController.createDemande);
router.post("/retour", auth, DemandeEmpruntController.demandeRetour);
router.get("/search", auth, DemandeEmpruntController.searchDemandeEmprunts);
router.get("/", auth, DemandeEmpruntController.getAllDemandes);
router.get("/demandesEnAttente", auth, DemandeEmpruntController.getDemandesEnAttente);
router.get("/userDemandes", auth, DemandeEmpruntController.getUserDemandes);
router.put("/:id", auth, DemandeEmpruntController.updateDemande);
router.put("/:id/approuver", auth, DemandeEmpruntController.approuverDemande);
router.put("/:id/refuser", auth, DemandeEmpruntController.refuserDemande);
router.delete("/:id/annulerDemande", auth, DemandeEmpruntController.AnnulerDemande);

module.exports = router;
