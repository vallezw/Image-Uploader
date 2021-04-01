const Server = require('./server');

const server = new Server(process.env.PORT || 5000);
server.start();