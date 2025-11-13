const express = require('express');
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const notificationSocket = require("./sockets/notification.socket.js");


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,       
    },
});

app.use(cors());
app.use(express.json());

notificationSocket(io);

const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');
const empruntRouter = require("./routes/emprunt.route.js");
const equipementRouter = require("./routes/equipement.route.js");
const consommabletRouter = require("./routes/consommable.route.js");
const notificationRoutes = require("./routes/notification.route.js");
const demandeEmpruntRouter = require("./routes/demandeEmprunt.route.js");
const utilisationConsommableRouter = require("./routes/utilisationConsommable.route.js");


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/emprunt', empruntRouter);
app.use('/api/equipement', equipementRouter);
app.use('/api/consommable', consommabletRouter);
app.use('/api/notification', notificationRoutes);
app.use('/api/demande', demandeEmpruntRouter);
app.use('/api/utilisation', utilisationConsommableRouter);


// Route de base(pour le test)
app.get('/', (req, res) => {
    res.send("API is running.");
});


module.exports = { app, server, io };