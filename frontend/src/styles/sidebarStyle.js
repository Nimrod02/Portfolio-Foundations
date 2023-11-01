// Side bar component styles
// PATH: frontend/src/styles/sidebarStyle.js

import { StyleSheet } from "react-native";


const sidebarStyle = StyleSheet.create({

  Container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 3,
    width: "55%",
    height: "107.4%",
    backgroundColor: "#18181B",
    zIndex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  viableContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    marginTop: 50,
    width: "100%",
    height: "96%",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginBottom: 50,
    marginTop: 6,
  },

  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
  },

  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: "79%",
  },

  themeBtn: {
    position: "absolute",
    bottom: "97%",
    justifyContent: 'flex-end',
  },

  aboutBtn: {
    position: "absolute",
    bottom: "87%",
    justifyContent: 'flex-end',
  },
  themeText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },

  clickableHalf: {
    height: "88%",
    width: "45%",
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },

});


export default sidebarStyle;