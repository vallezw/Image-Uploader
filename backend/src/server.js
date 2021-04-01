const express = require('express');
const { applyMiddlewares } = require('./middlewares');

class Server {
    _port;
    _app;

    constructor(port) {
        this._port = port;
        this._app = express();
    }

    start() {
        applyMiddlewares();
        this._app.listen(this._port, () => console.log(`Server is running on port ${this._port}`));
    }
}

module.exports = Server;