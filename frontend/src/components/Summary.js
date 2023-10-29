// Summary component - Displays the speed summary of the user's speed test
// PATH : frontend/src/components/Summary.js

// Imports
// View
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Styles
import speedSummaryStyle from "../styles/summaryStyle";


function SpeedSummary(props) {

  const downloadSpeed = "163,37";
  const uploadSpeed = "163,37";
  const ssid = "Livebox-54F0";
  const device = "iPhone XS"
  const ipAddress = "192.168.1.45";

  // States
  const [askForDetails, setAskForDetails] = useState(false);

  // Dark mode
  const { isDarkMode, toggleTheme } = props;

  const handleToggleTheme = () => {
    toggleTheme(!isDarkMode);
  };
  // Functions
  const HandleDetailButton = () => {
    setAskForDetails(!askForDetails);
    console.log("Details button pressed");
  }

  // View
  return (
    <View style={[speedSummaryStyle.Body, isDarkMode && speedSummaryStyle.BodyDarkmode]}>
      <View style={speedSummaryStyle.SpeedsContainer}>

        <View style={speedSummaryStyle.DownloadContainer}>
          <View style={speedSummaryStyle.SpeedTypeContainer}>
            <MaterialCommunityIcons size={24} color={"#48cae4"} name="arrow-down-circle-outline" />
            <Text style={speedSummaryStyle.SpeedTypeText}>Download</Text>
          </View>
          <View style={speedSummaryStyle.SpeedContainer}>
            <Text style={speedSummaryStyle.SpeedDisplay}>{downloadSpeed}</Text>
            <Text style={speedSummaryStyle.SpeedUnit}>Mbps</Text>
          </View>
        </View>

        <View style={speedSummaryStyle.UploadContainer}>
          <View style={speedSummaryStyle.SpeedTypeContainer}>
            <MaterialCommunityIcons size={24} color={"#e63946"} name="arrow-up-circle-outline" />
            <Text style={speedSummaryStyle.SpeedTypeText}>Upload</Text>
          </View>
          <View style={speedSummaryStyle.SpeedContainer}>
            <Text style={speedSummaryStyle.SpeedDisplay}>{uploadSpeed}</Text>
            <Text style={speedSummaryStyle.SpeedUnit}>Mbps</Text>
          </View>
        </View>

      </View>

      <View style={[speedSummaryStyle.DetailContainer, askForDetails && speedSummaryStyle.DetailContainerTriggered]}>
        <TouchableOpacity style={speedSummaryStyle.DetailButton} onPress={HandleDetailButton} >
          <Text style={speedSummaryStyle.DetailText}>Details</Text>
          <MaterialCommunityIcons style={[speedSummaryStyle.DetailIcon, askForDetails && speedSummaryStyle.RotateDetailIcon]} size={24} name="arrow-down-drop-circle-outline" />
        </TouchableOpacity>

        {askForDetails && 
        <View style={speedSummaryStyle.GraphsContainer}>

          <View style={speedSummaryStyle.DownSpeedGraphContainer}>
            <View style={speedSummaryStyle.SpeedGraphInfoContainer}>
              <MaterialCommunityIcons size={24} color={"#48cae4"} name="arrow-down-circle-outline" />
              <Text style={speedSummaryStyle.SpeedTypeGraphText}>  Download  </Text>
              <Text style={speedSummaryStyle.SpeedTypeGraphText}>{downloadSpeed}  </Text>
              <Text style={speedSummaryStyle.SpeedUnitGraphText}>Mbps</Text>
            </View>
          </View>

          <View style={speedSummaryStyle.UpSpeedGraphContainer}>
            <View style={speedSummaryStyle.SpeedGraphInfoContainer}>
              <MaterialCommunityIcons size={24} color={"#e63946"} name="arrow-up-circle-outline" />
              <Text style={speedSummaryStyle.SpeedTypeGraphText}>  Upload  </Text>
              <Text style={speedSummaryStyle.SpeedTypeGraphText}>{uploadSpeed}  </Text>
              <Text style={speedSummaryStyle.SpeedUnitGraphText}>Mbps</Text>
            </View>
          </View>

        </View>
        }
      </View>
      <View style={speedSummaryStyle.InfoContainer}>
        <View style={speedSummaryStyle.InfoOperatorContainer}>
          <MaterialCommunityIcons size={35} color={"#04f6f7"} name="router-wireless" />
            <View style={speedSummaryStyle.InfoOperatorTextContainer}>
              <Text style={{ ...speedSummaryStyle.InfoText, color: 'white' }}>  SSID</Text>
              <Text style={{ ...speedSummaryStyle.InfoText, color: 'grey' }}>  {ssid}</Text>
            </View>
          
        </View>

        <View style={speedSummaryStyle.InfoDeviceContainer}>
          <MaterialCommunityIcons size={35} color={"#04f6f7"} name="cellphone" />
            <View style={speedSummaryStyle.InfoOperatorTextContainer}>
              <Text style={{ ...speedSummaryStyle.InfoText, color: 'white' }}>  Device</Text>
              <Text style={{ ...speedSummaryStyle.InfoText, color: 'grey' }}>  {device}</Text>
            </View>
          
        </View>
      </View>
    </View>
  )
}

export default SpeedSummary;