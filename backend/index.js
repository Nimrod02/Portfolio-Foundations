const express = require('express');
const bodyParser = require('body-parser');
const downloadController = require('./src/controllers/downloadController');
const uploadController = require('./src/controllers/uploadController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('internet speed test server /download /upload');
});

const downloadRouter = express.Router();
downloadRouter.get('/', downloadController.downloadFile);
app.use('/download', downloadRouter);

const uploadRouter = express.Router();
uploadRouter.post('/', uploadController.uploadFile);
app.use('/upload', uploadRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});