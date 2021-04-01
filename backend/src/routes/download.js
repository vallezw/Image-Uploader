const { Router } = require('express');
const { endpoints } = require('../constants');

const router = Router();

router.get(endpoints.DOWNLOAD_FILE, (req, res) => {
    res.download(`${__dirname}/..${endpoints.UPLOAD_STATIC_DIRECTORY}/${req.params.id}`);
});

module.exports = router;
