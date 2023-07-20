import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log("connect");

  socket.on("yyy", (reason) => {
    console.log(`user disconnected. reason is ${reason}`);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, function () {
  console.log("server listening. Port:" + PORT);
});
