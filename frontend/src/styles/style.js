// Overall style 
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27272a",
  },
  body: {
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
//    #1d3557 / #27272a - body background
//    #1d2d44 - detail section / top bar background
//    #e63946 - upload arrow
//    #48cae4 - download arrow
//    #04f6f7 - neon icon