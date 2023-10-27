const fs = require('fs');

const uploadFile = (req, res) => {
  const file = req.body.file;
  const fileName = req.body.fileName;

  fs.writeFile(fileName, file, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
    } else {
      res.status(200).send('File uploaded successfully');
    }
  });
};


module.exports = { uploadFile };