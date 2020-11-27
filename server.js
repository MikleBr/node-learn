const http = require("http");

function startServer(router, handlers, port) {

  function onRequest(req, res) {
    router(req, res, handlers);
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started on " + port);
}

exports.startServer = startServer;
