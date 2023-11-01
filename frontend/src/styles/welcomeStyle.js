// Welcome page styles
// PATH: frontend/src/styles/welcomeStyle.js

import { StyleSheet } from 'react-native';

const welcomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27272a",
  },
  
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    position: "absolute",
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },

  logo: {
    width: 125,
    height: 125,
  },

  welcomeTextTitle: {
    fontSize: 60,
    fontWeight: "bold",
    color: "grey",
  },

  welcomeTextDescription: {
    color: "#fff",
    width: "70%",
    fontSize: 15,
    textAlign: "center",
  },

  welcomeTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  buttonsContainer: {
    display: "flex",
    position: "absolute",
    bottom: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

  },

  registerText: {
    color: "#fff",
    width: "70%",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },

  registerButtonContainer: {
    backgroundColor: '#1d2d44',
    borderRadius: 25,
    padding: 10,
    marginBottom: 60,
    width: "90%",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueButtonContainer: {
    backgroundColor: '#1d2d44',
    borderRadius: 25,
    padding: 10,
    width: "90%",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default welcomeStyle;