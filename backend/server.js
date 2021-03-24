const express = require("express");
const fileUpload = require("express-fileupload");

const app = express()

var shortid = require("shortid")

app.use(fileUpload());

app.use("/upload", express.static( __dirname + '/upload'));

var findRemoveSync = require('find-remove');

// Upload Endpoint
app.post("/upload", (req, res) => {
    if(req.files === null){
        console.log("no file uploaded");
        return res.status(400).json({ msg: "No file uploaded" })
    }

    const file = req.files.file;
    
    file_ending = file.name.split(".")
    file_ending = file_ending[file_ending.length - 1]

    fileName = shortid() + '.' + file_ending
    file.mv(`${__dirname}/upload/${fileName}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ filePath: `/upload/${fileName}`});
    })
})

app.get("/download/:id", function (req, res) {
    res.download(`./upload/${req.params.id}`);
});


// Delete images which are older than 1 Week (604800 seconds) every day (86400 seconds)
setInterval(findRemoveSync.bind(this, __dirname + '/upload', { age: {seconds: 604800}, extensions: ['.jpg', '.jpeg', '.png', '.gif']}), 86400)
app.listen(5000, () => console.log("Server Started..."))

