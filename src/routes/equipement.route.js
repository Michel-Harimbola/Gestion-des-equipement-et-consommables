const express = require("express");
const router = express.Router();
const EquipementController = require("../controllers/equipement.controller.js");
const auth = require("../middlewares/authMiddleware.js");

router.post("/create", auth, EquipementController.createEquipement);
router.get("/:id", auth, EquipementController.getEquipementById);
router.get("/", auth, EquipementController.getAllEquipements);
router.put("/:id", auth, EquipementController.updateEquipement);
router.delete("/:id", auth, EquipementController.deleteEquipement);

module.exports = router;