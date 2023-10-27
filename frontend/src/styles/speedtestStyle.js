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
    backgroundColor: "#0e0b63",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 200,
    borderRadius: 100,
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

  // When Done
  Resume: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },

  CloseContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    position: "absolute",
    top: 5,
    left: 5,
  },
  CloseButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
  CloseIcon: {
    color: "black",
  },

  SpeedContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    width: "90%",
  },
  DownSpeedContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "50%",
  },
  DownSpeedText: {
    color: "#04f6f7",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  UpSpeedContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "50%",
  },
  UpSpeedText: {
    color: "#04f6f7",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  
  SpeedIcons: {
    color: "black",
    marginRight: 5,
  },
});

export default speedtestStyle;