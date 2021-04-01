const { applyMiddlewares } = require('../middlewares');
const { renderRoutes } = require('../routes/index');

const initiateResources = (app) => {
    applyMiddlewares(app);
    renderRoutes(app);
};

module.exports = initiateResources;