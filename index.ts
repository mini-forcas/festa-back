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
// io ... client
// socket ... server
io.on("connection", (socket) => {
  console.log("connect");
  io.emit("tokenId", socket.id);
  console.log(socket.id);

  socket.on("submitAnswer", (ans: String | Number) => {
    console.log(`受け取った答え:${ans}`);
  });

  socket.on("showAnswer", (ans: String | Number) => {
    io.emit("receiveAnswer", ans);
  });

  socket.on("startQuiz", () => {
    io.emit("showQuiz");
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, function () {
  console.log("server listening. Port:" + PORT);
});
