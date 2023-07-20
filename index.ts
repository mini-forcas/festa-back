import express, { Request, Response, NextFunction } from "express";
import socketio from "socket.io";
import { Server } from "http";

var app = express();
const allowCrossDomain = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers"
    // "Content-Type, Authorization, access_token"
  );

  // intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

var http = new Server(app);
const socket = new socketio.Server(http);
const PORT = process.env.PORT || 5000;

socket.on("connection", function (socket) {
  console.log("connect");
});

socket.on("yyy", (data: { message: string }) => {
  console.log(`type: ${typeof data}   data: ${data.message}`);
});

http.listen(PORT, function () {
  console.log("server listening. Port:" + PORT);
});
