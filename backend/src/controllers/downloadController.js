const path = require('path');
const fs = require('fs');

exports.downloadFile = (req, res) => {
  const fileName = '100MB.dat';
  const filePath = path.join(__dirname, 'utils', fileName);

  console.log('Requested file path:', filePath); 

  if (fs.existsSync(filePath)) {
    console.log('File exists.'); 
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error downloading file:', err); 
        res.status(500).send('Error downloading file');
      }
    });
  } else {
    console.log('File does not exist.'); 
    res.status(404).send('The file requested does not exist');
  }
};

