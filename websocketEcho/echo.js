var ws = require("websocket.io");
var server = ws.listen(8888,
  function () {
    console.log("ws start");
  }
);

server.on("connection", function(socket) {
  console.log(socket.req.headers);
  socket.on("error", function (e) {
    console.log(e);
  });
  socket.on("close", function () {
    console.log("closed");
  });
  socket.on("message",function(data) {
    console.log("message " + data);
    server.clients.forEach( function(client) {
      client.send(data);
    });
  });
});