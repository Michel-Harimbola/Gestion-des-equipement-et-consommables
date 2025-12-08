const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/auth', require('./routes/auth.route.js'));
app.use('/api/user', require('./routes/user.route.js'));
app.use('/api/emprunt', require("./routes/emprunt.route.js"));
app.use('/api/equipement', require("./routes/equipement.route.js"));
app.use('/api/consommable', require("./routes/consommable.route.js"));
app.use('/api/notification', require("./routes/notification.route.js"));
app.use('/api/demande', require("./routes/demandeEmprunt.route.js"));
app.use('/api/utilisation', require("./routes/utilisationConsommable.route.js"));
app.use('/api/dashboard', require('./routes/dashboard.route.js'));


// Route de base(pour le test)
app.get('/', (req, res) => {
    res.send("API is running.");
});

app.post('/test', (req, res) => {
  console.log("REQ BODY /test =>", req.body);
  res.json(req.body);
});

module.exports = app;