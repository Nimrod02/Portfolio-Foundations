import { StyleSheet } from "react-native";

const speedtestStyle = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },

  // When Idle
  RunButton: {
    backgroundColor: "#1d3557",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#04f6f7",
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
    backgroundColor: "#112e96",
  },
  ProgressionCircle: {
    position: "absolute",
  },
  ProgressionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
  },
});

export default speedtestStyle;