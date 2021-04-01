const express = require('express');

export class Server {
    _port;
    _app;

    constructor(port) {
        this._port = port;
        this._app = express();
    }

    start() {
        this._app.listen(this._port, () => console.log(`Server is running on port ${this._port}`));
    }
}