const express = require("express");
const auth = require("../middlewares/authMiddleware.js");
const { getDashboardStats, getEmpruntsParMois } = require("../controllers/dashboard.controller.js");

const router = express.Router();

router.get('/stats', auth, getDashboardStats);
router.get('/empruntsParMois', auth, getEmpruntsParMois);

module.exports = router;