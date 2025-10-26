const express = require("express");
const router = express.Router();
const empruntController = require("../controllers/emprunt.controller.js");
const auth = require("../middlewares/authMiddleware.js");

router.post("/create",auth, empruntController.createEmprunt);
router.get("/:id", auth, empruntController.getEmpruntById);
router.get("/AllEmprunts", auth, empruntController.getAllEmprunts);
router.get("/userEmprunts", auth, empruntController.getUserEmprunts);
router.put("/:id", auth, empruntController.updateEmprunt);
router.patch("/:id/return", auth, empruntController.returnEmprunt);
router.delete("/:id", auth, empruntController.deleteEmprunt);

module.exports = router;