// top bar component
// Path: frontend/src/components/topBar.js

// Imports
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import topbarStyle from '../styles/topBarStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = (props) => {
  const { isDarkMode, toggleTheme } = props;

  const handleToggleTheme = () => {
    toggleTheme(!isDarkMode);
    console.log("Dark mode: " + isDarkMode);
  };

  return (
    <SafeAreaView style={[topbarStyle.Container, isDarkMode && topbarStyle.DarkmodeContainer]}>
      <MaterialCommunityIcons style={topbarStyle.Logo} size={24} color={"white"} name="speedometer" />
      <Text style={topbarStyle.Title}>{props.name}</Text>
      <TouchableOpacity style={topbarStyle.DarkmodeButton} onPress={handleToggleTheme}>
        <MaterialCommunityIcons size={20} color={"#1d2d44"} name="theme-light-dark" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TopBar;
