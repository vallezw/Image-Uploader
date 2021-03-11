const express = require("express");
const fileUpload = require("express-fileupload");

const app = express()

var uuid = require('uuid');

app.use(fileUpload());

app.use("/uploads", express.static( __dirname + '/uploads'));
// Upload Endpoint
app.post("/upload", (req, res) => {
    console.log("uploading");
    if(req.files === null){
        console.log("no file uploaded");
        return res.status(400).json({ msg: "No file uploaded" })
    }

    const file = req.files.file;
    
    fileName = uuid.v4() + '.' + file.name.split(".")[1]
    file.mv(`${__dirname}/uploads/${fileName}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
})

app.listen(5000, () => console.log("Server Started..."))