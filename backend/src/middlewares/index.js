const cors = require("./cors");

const applyMiddlewares = (app) => {
    app.use(cors());
};

module.exports = { applyMiddlewares };