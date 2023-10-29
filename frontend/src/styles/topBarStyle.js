// top bar component style
import { StyleSheet } from "react-native";

const topbarStyle = StyleSheet.create({
  
  // Base style and light mode
  Container: {
    flex: 0.05,
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    marginRight: 10,
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  DarkmodeButton: {
    position: 'absolute',
    right: 20,
    bottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
  },
  ThemeButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1d2d44',
  },


  // Dark mode
  DarkmodeContainer: {
    backgroundColor: '#1d2d44',
  },
});

export default topbarStyle;