const express = require("express");
const empruntController = require("../controllers/emprunt.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/create", auth, empruntController.createEmprunt);
router.get("/:id/byId", auth, empruntController.getEmpruntById);
router.get("/", auth, empruntController.getAllEmprunts);
router.get("/userEmprunts", auth, empruntController.getUserEmprunts);
router.get("/userEmpruntsInProgress", auth, empruntController.getUserEmpruntsInProgress);
router.get("/recent", auth, empruntController.getRecentEmprunts);
router.put("/:id", auth, empruntController.updateEmprunt);
router.patch("/:id/return", auth, empruntController.returnEmprunt);
router.delete("/:id", auth, empruntController.deleteEmprunt);

module.exports = router;