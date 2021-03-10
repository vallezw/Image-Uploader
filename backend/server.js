const express = require("express");
const fileUpload = require("express-fileupload");

const app = express()

app.use(fileUpload());

app.listen(5000, () => console.log("Server Started..."))