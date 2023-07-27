"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var app = (0, express_1.default)();
var http = new http_1.Server(app);
var socket = new socket_io_1.default.Server(http);
var PORT = process.env.PORT || 5000;
socket.on('connection', function (socket) {
    console.log('connect');
});
socket.on('submitAnswer', function (ans) {

});
http.listen(PORT, function () {
    console.log('server listening. Port:' + PORT);
});
