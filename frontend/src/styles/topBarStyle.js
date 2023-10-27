import { StyleSheet } from "react-native";

const topBarStyle = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: '#112e96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    top: 13,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default topBarStyle;