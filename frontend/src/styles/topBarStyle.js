// top bar component style
import { StyleSheet } from "react-native";

const topbarStyle = StyleSheet.create({
  
  // Base style and dark mode
  Container: {
    flex: 0.05,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#27272a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeBtn: {
    position: 'absolute',
    left: 15,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    marginRight: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  paraBtn: {
    position: 'absolute',
    right: 15,
  },
  paraBtnMoved: {
    position: 'absolute',
    left: 135,
  },
});

export default topbarStyle;