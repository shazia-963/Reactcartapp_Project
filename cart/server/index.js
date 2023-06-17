const jsonServer  = require("json-server");//importing json server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3007;//in port number we can use any number

server.use(middlewares);
server.use(router);

server.listen(port);