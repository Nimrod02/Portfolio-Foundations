// Speedtest Page Style
import { StyleSheet } from "react-native";

const speedtestStyle = StyleSheet.create({

  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27272a",
  },

  body: {
    backgroundColor: "#27272a",
    flex: 0.95,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },


  // When Idle
  idleContainer: {
    height: 220,
    width: 220,
    borderRadius: 110,
    borderColor: "rgba(4, 246, 247, 0.4)",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  RunButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 200,

  },

  RunText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  
  // When Loading
  ProgressionContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 25,
  },

  ProgressionCircle: {
    position: "absolute",
  },

});

export default speedtestStyle;