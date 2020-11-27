const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

handlers = {};
handlers['/'] = requestHandlers.mainPage
handlers['/read'] = requestHandlers.file

server.startServer(router.route, handlers, 5000);