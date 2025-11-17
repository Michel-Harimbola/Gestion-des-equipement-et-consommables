const cron = require("node-cron");
const { checkRetardAndNotify } = require("../services/emprunt.service.js");

module.exports.startRetardCron = () => {
  // 🎯 Vérifie toutes les 1 minutes (modifiable)
  cron.schedule("* * * * *", async () => {
    console.log("Cron : Vérification des retards...");
    await checkRetardAndNotify();
  });
};
