import axios from 'axios';

const downSpeedTest = async () => {
  // downloadTest
  const startDownloadTime = Date.now();
  console.log('start download...');
  const res = await axios.get('http://192.168.1.120:3000/download');
  console.log('end download.');
  const endDownloadTime = Date.now();
  const downloadTime = endDownloadTime - startDownloadTime;
  const downloadSpeed = (100 / downloadTime * 1000) * 8;
  return downloadSpeed;
};

// // uploadTest
// const upSpeedTest = async (file) => {
//   const startUploadTime = Date.now();
//   console.log('start upload...');

//   const formData = new FormData();
//   formData.append('40MB.dat', file);

//   try {
//     const response = await axios.post('http://192.168.1.120:3000/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log('end upload.');
//     const endUploadTime = Date.now();
//     const uploadTime = endUploadTime - startUploadTime;
//     const uploadSpeed = (file.size / uploadTime * 1000) * 8; // Mbps

//     return uploadSpeed;
//   } catch (error) {
//     console.error('Upload failed:', error);
//     return 0;
//   }
// };

export { downSpeedTest };
