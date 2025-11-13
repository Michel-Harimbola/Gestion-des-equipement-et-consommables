function notificationSocket(io) {
  io.on("connection", (socket) => {
    console.log(`Client connecté: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Client déconnecté: ${socket.id}`);
    });
  });
}

module.exports = notificationSocket;
