const { applyMiddlewares } = require('../middlewares');
const { renderRoutes } = require('../routes/index');
const removeImages = require('./remove-images');

const initiateResources = (app) => {
    applyMiddlewares(app);

    renderRoutes(app);

    if(process.env.REMOVE_IMAGES === 'true') {
        removeImages();
    };
};

module.exports = initiateResources;