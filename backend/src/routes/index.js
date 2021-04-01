const uploadRouter = require('./upload');
const downloadRouter = require('./download');

const renderRoutes = (app) => {
    [uploadRouter, downloadRouter].forEach(router => app.use('/', router));
};

module.exports = { renderRoutes };