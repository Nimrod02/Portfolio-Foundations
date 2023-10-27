import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';


// Test download speed
// Returns: if successful - {success=true, downloadSpeed}
//          if unsuccessful - {success=false, error}
const downSpeedTest = async () => {
  try {
    console.log('Start download speed test.');
    const startDownloadTime = Date.now();
    console.log('Testing...');
    const res = await axios.get('http://192.168.1.192:3001/download');
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


const upSpeedTest = async () => {
  try {
    console.log('Start upload speed test.');
    const startDownloadTime = Date.now();
    console.log('Testing...');
    const res = await axios.post('http://192.168.1.192:3001/upload');
    console.log('Upload complete.');
    const endDownloadTime = Date.now();
    const downloadTime = endDownloadTime - startDownloadTime;
    console.log('Upload time: ' + downloadTime + ' ms');
    const speed = (100 / downloadTime * 1000) * 8;
    console.log('Upload speed: ' + speed.toFixed(2) + ' Mbps');
    console.log('Upload speed test complete.');
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