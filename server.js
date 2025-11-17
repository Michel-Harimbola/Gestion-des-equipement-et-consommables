require('dotenv').config();
const http = require("http");
const app = require("./src/app");
const { init: initIO } = require("./src/socket");
const { startRetardCron } = require("./src/cron/retardCron");


const server = http.createServer(app);
const io = initIO(server);

startRetardCron();

// Event socket générique 
io.on("connection", (socket) => {
  console.log("Un client est connecté :", socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
