// View
import React from "react";
import { Text, SafeAreaView, View } from "react-native";

// Components and utils
import TopBar from "../components/topBar";

// Styles
import styles from "../styles/style";
import heatmapStyle from "../styles/heatmapStyle";


function Heatmap() {

// View
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.body}>
        <Text style={heatmapStyle.title}>Heatmap</Text>
        <Text style={heatmapStyle.text}>This is the heatmap screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default Heatmap;