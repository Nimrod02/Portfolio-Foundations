// View
import React from "react";
import { Text, SafeAreaView, View } from "react-native";

// Components and utils
import TopBar from "../components/topBar";

// Styles
import styles from "../styles/style";
import inspectorStyle from "../styles/inspectorStyle";


function Inspector() {

// View
  return (
    <SafeAreaView style={styles.Container}>
      <TopBar />
      <View style={styles.body}>
        <Text style={inspectorStyle.title}>WiFi Inspector</Text>
        <Text style={inspectorStyle.text}>This is the wifi inspector screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default Inspector;