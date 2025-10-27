const express = require("express");
const router = express.Router();
const ConsommableController = require("../controllers/consommable.controller.js");
const auth = require("../middlewares/authMiddleware.js");

router.post("/create", auth, ConsommableController.createConsommable);
router.get("/:id", auth, ConsommableController.getConsommableById);
router.get("/", auth, ConsommableController.getAllConsommables);
router.put("/:id", auth, ConsommableController.updateConsommable);
router.delete("/:id", auth, ConsommableController.deleteConsommable);

module.exports = router;