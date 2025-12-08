const DashboardService = require("../services/dashboard.service.js");

exports.getDashboardStats = async (req, res) => {
  try {
    const stats = await DashboardService.getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmpruntsParMois = async (req, res) => {
  try {
    const data = await DashboardService.getEmpruntsParMois();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de récupérer les emprunts par mois." });
  }
};