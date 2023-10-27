const express = require('express');
const multer  = require('multer');
const path = require('path');

const upload = multer({ dest: path.join(__dirname, '../utils') });
const uploadFile = express();

uploadFile.post('/', upload.single('10MB.dat'), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received successfully');
    return res.send({
      success: true
    })
  }
});


module.exports = uploadFile;
