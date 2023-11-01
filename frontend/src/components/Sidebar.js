// Side bar menu component
// PATH: frontend/src/components/Sidebar.js

// Imports
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import sidebarStyle from "../styles/sidebarStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SideBar = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  // States
  const [isLight, setIsLight] = useState(false);

  const HandleThemeClick = () => {
    setIsLight(!isLight);
    if (isLight === false) {
      console.log("Changed theme to dark");
    } else {
      console.log("Changed theme to light");
    }
  };

  const HandleAboutClick = () => {
    Linking.openURL('https://spark4545.github.io/Portfolio-Foundations--Landing-Page/');
  };

  return (
    <View style={sidebarStyle.Container}> 

      <View style={sidebarStyle.viableContainer}>

        <View style={sidebarStyle.header}>

          <Image
            style={sidebarStyle.logo}
            source={require("../styles/images/logo-white.png")}
          />
          <Text style={sidebarStyle.headerText}>WaveScan</Text>

        </View>

        <View style={sidebarStyle.menu}>

          <TouchableOpacity style={sidebarStyle.themeBtn} onPress={HandleThemeClick}>
            {isLight ? (
              <MaterialCommunityIcons
                name="lightbulb-on"
                color="white" 
                size={35}
              />
            ) : (
              <MaterialCommunityIcons
                name="lightbulb-outline"
                color="white" 
                size={30}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={sidebarStyle.aboutBtn} onPress={HandleAboutClick}>
            <Text style={sidebarStyle.themeText}>About this project</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

export default SideBar;