// View
import React from "react";
import { Text, SafeAreaView, View } from "react-native";

// Components and utils
import TopBar from "../components/topBar";

// Styles
import styles from "../styles/style";
import speedtestStyle from "../styles/speedtestStyle";


function Speedtest() {

// View
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.body}>
        <Text style={speedtestStyle.title}>Speed Test</Text>
        <Text style={speedtestStyle.text}>This is the speed test screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default Speedtest;