const express = require("express");
const UtilisationConsommableController = require("../controllers/utilisationConsommable.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/create", auth, UtilisationConsommableController.create);
router.get("/search", auth,  UtilisationConsommableController.searchUtilisation);
router.get("/searchUserUtilisation", auth,  UtilisationConsommableController.searchUserUtilisation);
router.get("/", auth, UtilisationConsommableController.getAll);
router.get("/userUtilisation", auth, UtilisationConsommableController.getUserUtilisation);
router.get("/:id", auth, UtilisationConsommableController.getById);
router.put("/:id", auth, UtilisationConsommableController.update);
router.delete("/:id", auth, UtilisationConsommableController.delete);

module.exports = router;
