const generateId = require("shortid");
const express = require('express');
const { Router } = require('express');
const { endpoints } = require('../constants');

const router = Router();

router.use(endpoints.UPLOAD_STATIC_DIRECTORY, express.static( __dirname + endpoints.UPLOAD_STATIC_DIRECTORY));

router.post(endpoints.UPLOAD_FILE, (req, res) => {
    if(req.files === null){
        console.log('No file uploaded');
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    
    const file = req.files.file;
    
    fileEnding = file.name.split(".")
    fileEnding = fileEnding[fileEnding.length - 1]
    fileName = generateId() + '.' + fileEnding
    
    file.mv(`${__dirname}/..` + endpoints.UPLOAD_STATIC_DIRECTORY + `/${fileName}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ filePath: `${endpoints.UPLOAD_STATIC_DIRECTORY}/${fileName}`});
    });
});

module.exports = router;