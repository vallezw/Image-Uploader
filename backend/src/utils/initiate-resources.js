const { applyMiddlewares } = require('../middlewares');
const { renderRoutes } = require('../routes/index');
const removeImages = require('./remove-images');
const fs = require('fs');
const { endpoints } = require('../constants');


const initiateResources = (app) => {
    applyMiddlewares(app);

    renderRoutes(app);

    const dir = `${__dirname}/..` + endpoints.UPLOAD_STATIC_DIRECTORY

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    if(process.env.REMOVE_IMAGES === 'true') {
        removeImages();
    };
};

module.exports = initiateResources;