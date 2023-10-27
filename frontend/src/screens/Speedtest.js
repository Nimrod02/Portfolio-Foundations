// View
import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Components and utils
import TopBar from "../components/topBar";
import { 
  downSpeedTest, 
  getSpeedtestInfo, 
  isWifiAvailable, 
  upSpeedTest
} from "../utils/speedTest";

// Styles
import styles from "../styles/style";
import speedtestStyle from "../styles/speedtestStyle";


function Speedtest() {
  // States
  const [isIdle, setIsIdle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(57.25);
  const [ssid, setSSID] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const HandleRunButton = async () => {
    setIsLoading(true);
    setIsIdle(false);
    const wifiAvailable = await isWifiAvailable();
    if (wifiAvailable.success === true) {
      const uploadTest = await upSpeedTest();
      if (uploadTest.success === true) {
        const speed = uploadTest.speed;
        setDownloadSpeed(speed);
        const signalInfo = await getSpeedtestInfo();
        if (signalInfo.success === true) {
          setSSID(signalInfo.ssid);
          setIpAddress(signalInfo.ipAddress);
          setIsLoading(false);
          return;
        } else {
          setIsIdle(true);
          setIsLoading(false);
          return;
        }
      } else {
        setIsIdle(true);
        setIsLoading(false);
        return;
      }
    } else {
      setIsIdle(true);
      setIsLoading(false);
      return;
    }
  }

  const HandleCloseButton = async () => {
    setIsIdle(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setSSID("");
    setIpAddress("");
  }

  // View
    return (
      <SafeAreaView style={styles.container}>
        <TopBar />
        <View style={styles.body}>
          {isIdle ? (
            <TouchableOpacity style={speedtestStyle.RunButton} onPress={HandleRunButton} >
              <Text style={speedtestStyle.RunText}>Run</Text>
            </TouchableOpacity>
          ) : (
            isLoading ? (
                <View style={speedtestStyle.ProgressionContainer}>
                  <ActivityIndicator style={speedtestStyle.ProgressionCircle} size={75} color="#04f6f7" />
                  <Text style={speedtestStyle.ProgressionText}>45%</Text>
                </View>
            ) : (
              <View style={speedtestStyle.Resume}> 
                <View style={speedtestStyle.SpeedContainer}>
                  <View style={speedtestStyle.DownSpeedContainer}>
                    <MaterialCommunityIcons name="arrow-down-bold-circle-outline" size={40} color="#04f6f7" />
                    <Text style={speedtestStyle.DownSpeedText}>{downloadSpeed.toFixed(2)} Mbps</Text>
                  </View>
                  <View style={speedtestStyle.UpSpeedContainer}>
                    <MaterialCommunityIcons name="arrow-up-bold-circle-outline" size={40} color="#04f6f7" />
                    <Text style={speedtestStyle.UpSpeedText}>{uploadSpeed.toFixed(2)} Mbps</Text>
                  </View>
                </View>
                <View style={speedtestStyle.InfoContainer}>
                  <Text style={speedtestStyle.InfoText}>SSID: {ssid}</Text>
                  <Text style={speedtestStyle.InfoText}>IP Address: {ipAddress}</Text>
                </View>
              </View>
            )
          )}
        </View>
      </SafeAreaView>
    );
  }
  
  export default Speedtest;