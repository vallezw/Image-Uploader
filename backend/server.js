const express = require("express");
const fileUpload = require("express-fileupload");

const app = express()

var shortid = require("shortid")

var findRemoveSync = require('find-remove');

app.use(fileUpload());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
      return res.send(200);
    } else {
      return next();
    }
  });

app.use("/upload", express.static( __dirname + '/upload'));

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

app.get("/download/:id", (req, res)  => {
    res.download(`./upload/${req.params.id}`);
});

app.get("/test", (req, res) => {
    res.json({"test": "test"})
})


// In case you want to delete images which are older than 1 Week (604800 seconds) every day (86400 seconds): 
// setInterval(findRemoveSync.bind(this, __dirname + '/upload', { age: {seconds: 604800}, extensions: ['.jpg', '.jpeg', '.png', '.gif']}), 86400)
app.listen(5000, () => console.log("Server Started..."))
