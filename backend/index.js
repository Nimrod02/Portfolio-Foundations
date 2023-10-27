const express = require('express');
const bodyParser = require('body-parser');
const downloadController = require('./src/controllers/downloadController');
const uploadFile = require('./src/controllers/uploadController');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('internet speed test server /download /upload');
});

const downloadRouter = express.Router();
downloadRouter.get('/', downloadController.downloadFile);
app.use('/download', downloadRouter);

const uploadRouter = express.Router();
uploadRouter.post('/', uploadFile);
app.use('/upload', uploadRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});