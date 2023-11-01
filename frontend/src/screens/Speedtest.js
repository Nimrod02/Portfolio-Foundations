// Speedtest Page
// imports
// View
import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Components and utils
import TopBar from "../components/topBar";
import SideBar from "../components/Sidebar";
import { 
  downSpeedTest, 
  getSpeedtestInfo, 
  isWifiAvailable, 
  upSpeedTest
} from "../utils/speedTest";

// Styles
import speedtestStyle from "../styles/speedtestStyle";


function Speedtest() {
  // States
  const [isIdle, setIsIdle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(57.25);
  const [ssid, setSSID] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
    console.log('onToggleSidebar called');
  };

  // View
    return (
      <SafeAreaView style={speedtestStyle.Container}>
        <TopBar 
          name={"SPEEDTEST"}
          onToggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <View style={speedtestStyle.body}>
        <SideBar isOpen={isSidebarOpen} />
          {isIdle ? (
            <View style={speedtestStyle.idleContainer}>
              <TouchableOpacity style={speedtestStyle.RunButton} >
                <Text style={speedtestStyle.RunText}>RUN</Text>
              </TouchableOpacity>
            </View>
          ) : (
            isLoading ? (
                <View style={speedtestStyle.ProgressionContainer}>
                  <ActivityIndicator style={speedtestStyle.ProgressionCircle} size={75} color="#04f6f7" />
                </View>
            ) : (
              <SpeedSummary />
            )
          )}
        </View>
      </SafeAreaView>
    );
  }
  
  export default Speedtest;