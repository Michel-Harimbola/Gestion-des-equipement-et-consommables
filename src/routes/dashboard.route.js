const express = require("express");
const auth = require("../middlewares/authMiddleware.js");
const { getDashboardStats, getEmpruntsParMois, getEquipementsStatus } = require("../controllers/dashboard.controller.js");

const router = express.Router();

router.get('/stats', auth, getDashboardStats);
router.get('/empruntsParMois', auth, getEmpruntsParMois);
router.get('/equipementsStatus', auth, getEquipementsStatus);

module.exports = router;