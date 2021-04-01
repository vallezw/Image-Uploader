const express, { Router } = require('express');
const generateId = require("shortid")

const router = Router();

router.use('/upload', express.static( __dirname + '/upload'));

router.post('/upload', (req, res) => {
    if(req.files === null){
        console.log('No file uploaded');
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    
    const file = req.files.file;
    
    fileEnding = file.name.split(".")
    fileEnding = fileEnding[fileEnding.length - 1]

    fileName = generateId() + '.' + fileEnding
    file.mv(`${__dirname}/upload/${fileName}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ filePath: `/upload/${fileName}`});
    });
});

module.exports = router;