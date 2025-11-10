const express = require("express");
const auth = require("../middlewares/authMiddleware.js");
const DemandeEmpruntController = require("../controllers/demandeEmprunt.controller");
const router = express.Router();

router.post("/create", auth, DemandeEmpruntController.createDemande);
router.get("/", auth, DemandeEmpruntController.getAllDemandes);
router.get("/userDemandes", auth, DemandeEmpruntController.getUserDemandes);
router.put("/:id/approuver", auth, DemandeEmpruntController.approuverDemande);
router.put("/:id/refuser", auth, DemandeEmpruntController.refuserDemande);
router.delete("/:id/annulerDemande", auth, DemandeEmpruntController.AnnulerDemande);

module.exports = router;
