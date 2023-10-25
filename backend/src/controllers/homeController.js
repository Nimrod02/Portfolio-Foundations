const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
        res.send('Download and upload server');
      });

module.exports = app;
      