const express = require("express");
const router = express.Router();
const empruntController = require("../controllers/emprunt.controller.js");
const auth = require("../middlewares/authMiddleware.js");

router.post("/create", empruntController.createEmprunt);
router.get("/:id", auth, empruntController.getEmpruntById);
router.get("/AllEmprunts", auth, empruntController.getAllEmprunts);
router.put("/:id", auth, empruntController.updateEmprunt);
router.delete("/:id", auth, empruntController.deleteEmprunt);

module.exports = router;