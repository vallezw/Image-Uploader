const Server = require('./server').Server;

const server = new Server(process.env.PORT || 5000);
server.start();