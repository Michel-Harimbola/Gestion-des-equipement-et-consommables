const express = require('express');
const cors = require("cors");      
const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');
const empruntRouter = require("./routes/emprunt.route.js");
const equipementRouter = require("./routes/equipement.route.js");
const consommabletRouter = require("./routes/consommable.route.js");

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/emprunt', empruntRouter);
app.use('/api/equipement', equipementRouter);
app.use('/api/consommable', consommabletRouter);

// Route de base(pour le test)
app.get('/', (req, res) => {
    res.send("API is running.");
});

module.exports = app;