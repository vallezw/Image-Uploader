const express = require("express");
const fileUpload = require("express-fileupload");

const app = express()

var shortid = require("shortid")

app.use(fileUpload());

app.use("/uploads", express.static( __dirname + '/upload'));
// Upload Endpoint
app.post("/upload", (req, res) => {
    console.log("uploading");
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

app.listen(5000, () => console.log("Server Started..."))