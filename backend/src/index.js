require('./utils/load-env')

const Server = require('./server');

new Server(process.env.PORT || 5000).start();