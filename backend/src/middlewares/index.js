const fileUpload = require("express-fileupload");
const cors = require("./cors");

const applyMiddlewares = (app) => {
    app.use(fileUpload());
    app.use(cors);
};

module.exports = { applyMiddlewares };