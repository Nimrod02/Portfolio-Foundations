import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import * as FileSystem from 'expo-file-system';

// Test download speed
// Returns: if successful - {success=true, downloadSpeed}
//          if unsuccessful - {success=false, error}s
const downSpeedTest = async () => {
  try {
    console.log('Start download speed test.');
    const startDownloadTime = Date.now();
    console.log('Testing...');
    const res = await axios.get('http://192.168.1.164:3001/download');
    console.log('Download complete.');
    const endDownloadTime = Date.now();
    const downloadTime = endDownloadTime - startDownloadTime;
    console.log('Download time: ' + downloadTime + ' ms');
    const speed = (100 / downloadTime * 1000) * 8;
    console.log('Download speed: ' + speed.toFixed(2) + ' Mbps');
    console.log('Download speed test complete.');
    return {
      success: true,
      speed: speed,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error,
    };
  }
};

const generateTestData = (sizeInMB) => {
  const sizeInBytes = sizeInMB * 1024 * 1024;
  let testData = '';
  for(let i=0; i<sizeInBytes; i++) {
    testData += '0';
  }
  return testData;
}

const createTestFile = async () => {
  const filePath = FileSystem.documentDirectory + '10MB.dat';
  const testData = generateTestData(10); // Generate 10 MB of test data

  try {
    await FileSystem.writeAsStringAsync(filePath, testData);
    console.log('Test file created at:', filePath);
  } catch (error) {
    console.error('Error creating test file:', error);
  }
}

createTestFile();

// Test upload speed
// Returns: if successful - {success=true, uploadSpeed}
//          if unsuccessful - {success=false, error}
const upSpeedTest = async () => {
  try {
    console.log('Starting upload speed test.');
    const startUploadTime = Date.now();

    await createTestFile();

    const filePath = "file:///data/user/0/host.exp.exponent/files/10MB.dat"
    
    const fileUri = await FileSystem.getContentUriAsync(filePath);
    
    const formData = new FormData();
    formData.append('10MB.dat', { uri: fileUri, name: '10MB.dat', type: 'multipart/form-data' });

    const response = await axios.post('http://192.168.1.164:3001/upload', formData); // Fixed the URL and added formData
    console.log('Uploading file...');
    
    if (response.status === 200) { // Check the response status
      console.log('File upload completed successfully.');
      const endUploadTime = Date.now();
      const uploadTime = endUploadTime - startUploadTime;

      // Calculate speed in Mbps
      const speed = (10 / (uploadTime / 1000)) * 8; // 10 MB in 1 MB = 8 Mbps
      console.log('Upload time: ' + uploadTime + ' ms');
      console.log('Upload speed: ' + speed.toFixed(2) + ' Mbps');
      console.log('Upload speed test completed.');

      return {
        success: true,
        speed: speed,
      };
    } else {
      console.log('Upload failed:', response.status, response.statusText);
      return {
        success: false,
        error: 'Upload failed',
      };
    }
  } catch (error) {
    console.error('Error in upload speed test:', error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Gets the SSID and IP address of the wifi network
// Returns: if successful - {success=true, ssid, IPAddress}
//          if unsuccessful - {success=false, error}
const getSpeedtestInfo = async () => {
  try {
    const NetworkInfo = await NetInfo.fetch();
    console.log('SSID: ' + NetworkInfo.details.ssid);
    console.log('IP Address: ' + NetworkInfo.details.ipAddress);
    return {
      success: true,
      ssid: NetworkInfo.details.ssid,
      ipAddress: NetworkInfo.details.ipAddress,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}


// Checks if the device is using wifi and can reach the internet
// Returns: if type=wifi and isInternetReachable=true - true
//          if type!=wifi or isInternetReachable=false - false
const isWifiAvailable = async () => {
  try {
    const NetworkInfo = await NetInfo.fetch();
    if (NetworkInfo.isInternetReachable === true) {
      console.log("Internet is reachable");
      if (NetworkInfo.type === "wifi") {
        console.log("Type: wifi");
        return {
          success: true,
        };
      } else {
        console.log("Device needs to be connected to wifi");
        return {
          success: false,
          error: "Device needs to be connected to wifi",
        };
      }
    } else {
      console.log("Internet isn't reachable");
      return {
        success: false,
        error: "Internet isn't reachable",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error,
    };
  }
}

export { downSpeedTest, upSpeedTest, getSpeedtestInfo, isWifiAvailable};