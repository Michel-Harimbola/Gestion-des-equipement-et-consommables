const express = require("express");
const ConsommableController = require("../controllers/consommable.controller.js");
const auth = require("../middlewares/authMiddleware.js");
const createUpload = require("../middlewares/upload.js");

const router = express.Router();
const upload = createUpload("consommables");

router.post("/create", auth, upload.single("photo") , ConsommableController.createConsommable);
router.get("/search", auth, ConsommableController.searchConsommables);
router.get("/:id", auth, ConsommableController.getConsommableById);
router.get("/", auth, ConsommableController.getAllConsommables);
router.put("/:id", auth, ConsommableController.updateConsommable);
router.delete("/:id", auth, ConsommableController.deleteConsommable);

module.exports = router;