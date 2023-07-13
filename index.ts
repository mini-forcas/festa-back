import express from "express";
import socketio from 'socket.io';
import { Server } from 'http'

var app = express();
var http = new Server(app);
const socket = new socketio.Server(http);
const PORT = process.env.PORT || 5000;

socket.on('connection',function(socket){
    console.log('connect');
});

socket.on('yyy', (data: { message: string }) => {
  console.log(`type: ${typeof data}   data: ${data.message}`);
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});