import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const SpeedTest = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runSpeedTest = async () => {
    setIsLoading(true);
  
    try {
      // Download speed test
      const startDownloadTime = Date.now();
      console.log('working1');
      await axios.get('http://192.168.1.120:3000/download');
      console.log('working2');
      const endDownloadTime = Date.now();
  
      const downloadTime = endDownloadTime - startDownloadTime;
      const downloadSpeedMbps = (100 / (downloadTime / 1000) * 8); // Mbps
      console.log('Download speed working');
      
      // Upload speed test
      const startUploadTime = Date.now();
      const response = await axios.post('http://192.168.1.120:3000/upload', {
        file: '100MB.dat',
      });
      console.log('Upload speed working');
  
      const endUploadTime = Date.now();
      const uploadTime = endUploadTime - startUploadTime;
      const uploadSpeedMbps = (100 / (uploadTime / 1000) * 8); // Mbps
  
      setDownloadSpeed(downloadSpeedMbps);
      setUploadSpeed(uploadSpeedMbps);
    } catch (error) {
      console.error('Speed test failed: ', error);
    }
  
    setIsLoading(false);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Speed Test</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Run Speed Test" onPress={runSpeedTest} />
      )}
      {downloadSpeed && <Text style={styles.text}>Download Speed: {downloadSpeed.toFixed(2)} Mbps</Text>}
      {uploadSpeed && <Text style={styles.text}>Upload Speed: {uploadSpeed.toFixed(2)} Mbps</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default SpeedTest;