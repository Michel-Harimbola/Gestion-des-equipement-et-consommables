const cron = require("node-cron");
const { checkRetardAndNotify } = require("../services/emprunt.service.js");

module.exports.startRetardCron = () => {
  // Vérifie toutes les 1 minutes 
  cron.schedule("*/10 * * * * *", async () => {
    console.log("Cron : Vérification des retards...");
    await checkRetardAndNotify();
  });
};
