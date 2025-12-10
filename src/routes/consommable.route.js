const express = require("express");
const ConsommableController = require("../controllers/consommable.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/create", auth, ConsommableController.createConsommable);
router.get("/search", auth, ConsommableController.searchConsommables);
router.get("/:id", auth, ConsommableController.getConsommableById);
router.get("/", auth, ConsommableController.getAllConsommables);
router.put("/:id", auth, ConsommableController.updateConsommable);
router.delete("/:id", auth, ConsommableController.deleteConsommable);

module.exports = router;