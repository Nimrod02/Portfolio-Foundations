// Overall style 
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "grey",
  },
  body: {
    backgroundColor: "#1d3557",
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },

  // Dark mode
  DarkmodeContainer: {
    backgroundColor: "#1d2d44",
  },
});

export default style;

// Darkmode color palette:
//    #1d3557 - body background
//    #1d2d44 - detail section / top bar background
//    #e63946 - upload arrow
//    #48cae4 - download arrow
//    #04f6f7 - neon icon