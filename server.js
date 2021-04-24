var express = require("express");
const cors = require("cors");
var app = express();
app.use(cors());
var http = require("http").Server(app);
var io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["*"],
    credentials: true,
  },
});

setInterval(function () {
  var msg = Math.random();
  io.emit("message", msg);
  console.log(msg);
}, 3000);

// start server
const port = process.env.PORT || 4000;
http.listen(port, function () {
  console.log("Server listening on port " + port);
});
