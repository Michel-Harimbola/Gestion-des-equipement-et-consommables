require('dotenv').config();
const http = require("http");
const app = require("./src/app");
const { init: initIO } = require("./src/socket");

// Crée le serveur HTTP
const server = http.createServer(app);

// Initialise Socket.IO
const io = initIO(server);

// Event socket générique 
io.on("connection", (socket) => {
  console.log("Un client est connecté :", socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
