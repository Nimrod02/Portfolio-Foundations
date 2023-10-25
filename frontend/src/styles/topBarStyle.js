import { StyleSheet } from "react-native";

const topBarStyle = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: '#0e0b63',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    top: 13,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default topBarStyle;