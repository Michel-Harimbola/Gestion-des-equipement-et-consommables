const express = require("express");
const UtilisationConsommableController = require("../controllers/utilisationConsommable.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/", auth, UtilisationConsommableController.create);
router.get("/", auth, UtilisationConsommableController.getAll);
router.get("/:id", auth, UtilisationConsommableController.getById);
router.put("/:id", auth, UtilisationConsommableController.update);
router.delete("/:id", auth, UtilisationConsommableController.delete);

export default router;
