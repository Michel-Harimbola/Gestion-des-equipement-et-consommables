const express = require("express");
const auth = require("../middlewares/auth");
const DemandeEmpruntController = require("../controllers/demandeEmprunt.controller");
const router = express.Router();

router.post("/create", auth, DemandeEmpruntController.createDemande);
router.get("/", auth, DemandeEmpruntController.getAllDemandes);
router.put("/:id/approuver", auth, DemandeEmpruntController.approuverDemande);
router.put("/:id/refuser", auth, DemandeEmpruntController.refuserDemande);

module.exports = router;
