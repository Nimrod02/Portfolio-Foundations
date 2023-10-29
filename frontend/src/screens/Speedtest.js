// Speedtest Page
// imports
// View
import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

// Components and utils
import TopBar from "../components/topBar";
import { 
  realizeSpeedtest,
} from "../utils/speedTest";

// Styles
import style from "../styles/style";
import speedtestStyle from "../styles/speedtestStyle";


function Speedtest() {
  // States
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  // Functions
  const toggleTheme = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
    console.log("changed theme");
  };

  const HandleRunButton = async () => {
    setIsIdle(false);
    setIsLoading(true);
    await realizeSpeedtest();
    setIsLoading(false);
  }

  // View
    return (
      <SafeAreaView style={[style.Container, isDarkMode && style.DarkmodeContainer]}>
        <TopBar name={"SPEED TEST"} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <View style={style.body}>
          {isIdle ? (
            <TouchableOpacity style={speedtestStyle.RunButton} onPress={HandleRunButton} >
              <Text style={speedtestStyle.RunText}>RUN</Text>
            </TouchableOpacity>
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