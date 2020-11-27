const url = require("url");

function notFound(res) {
  res.writeHeader(404, 'Content-Type', 'text/plain')
  res.end('Not found\n')
}

function route(req, res, handlers) {

  let pathname = url.parse(req.url).pathname;
  console.log('Page ' + pathname + ' was called');

  switch (pathname) {
    case "/": {
      handlers[pathname](res);
    }

    case "/read": {
      handlers[pathname](res);
    }

    default: {
      notFound(res);
      break;
    }
  }
}

exports.route = route;