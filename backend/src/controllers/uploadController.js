const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/utils');
  },
  filename: (req, file, cb) => {
    cb(null, '100MB.dat');
  },
});

const upload = multer({ storage });

const uploadFile = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      res.status(400).send('Bad request');
    } else {
      res.send('File uploaded successfully');
    }
  });
};

module.exports = { uploadFile };
