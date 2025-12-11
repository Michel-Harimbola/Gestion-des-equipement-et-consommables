const express = require("express");
const rapportController = require("../controllers/rapport.controller.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/generate/monthly", auth, rapportController.generateMonthlyReport);
router.get("/", auth, rapportController.getAllRapports);
router.delete("/:id", auth, rapportController.deleteRapport);

module.exports = router;