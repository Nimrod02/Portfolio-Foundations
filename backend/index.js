const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('internet speed test server /donwload /upload');
});

app.use('/download', express.static('./src/utils'));

app.get('/download', (req, res) => {
const filePath = path.join(__dirname, 'src', 'utils', '100MB.dat');
  res.download(filePath, '100MB.dat', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error downloading file');
    }
  });
});

const multer = require('multer');
const upload = multer({ dest: './src/utils' });

const uploadController = require('./src/controllers/uploadController');
app.post('/upload', upload.single('file'), uploadController.uploadFile);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
