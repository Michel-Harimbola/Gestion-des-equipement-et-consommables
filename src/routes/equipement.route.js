const express = require("express");
const EquipementController = require("../controllers/equipement.controller.js");
const auth = require("../middlewares/authMiddleware.js");
const createUpload = require("../middlewares/upload.js");

const router = express.Router();
const upload = createUpload("equipements");

router.post("/create", auth, upload.single("photo"), EquipementController.createEquipement);
router.get("/search", auth, EquipementController.searchEquipements);
router.get("/:id", auth, EquipementController.getEquipementById);
router.get("/", auth, EquipementController.getAllEquipements);
router.put("/:id", auth, EquipementController.updateEquipement);
router.delete("/:id", auth, EquipementController.deleteEquipement);

module.exports = router;