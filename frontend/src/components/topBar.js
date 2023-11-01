// top bar component
// Path: frontend/src/components/topBar.js

// Imports
import { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import topbarStyle from '../styles/topBarStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = ({ onToggleSidebar, name, isOpen }) => {



  return (
    <SafeAreaView style={topbarStyle.Container}>
      
      {/* <TouchableOpacity style={topbarStyle.closeBtn} onPress={handleCloseBtn}>
        <MaterialCommunityIcons style={topbarStyle.closeIcon} size={27} color={"white"} name="close" />
      </TouchableOpacity> */}

      {/* {!isOpen && (
        <View style={topbarStyle.titleContainer}>
          <MaterialCommunityIcons style={topbarStyle.logo} size={27} color={"white"} name="speedometer" />
          <Text style={topbarStyle.title}>{name}</Text>
        </View>
      )} */}


      {!isOpen && (
        <TouchableOpacity style={topbarStyle.paraBtn} onPress={onToggleSidebar}>
          <MaterialCommunityIcons size={27} color={"white"} name="dots-horizontal" />
        </TouchableOpacity>
      )}
      {isOpen && (
        <TouchableOpacity style={topbarStyle.paraBtnMoved} onPress={onToggleSidebar}>
          <MaterialCommunityIcons size={35} color={"white"} name="dots-horizontal" />
        </TouchableOpacity>
      )}

    </SafeAreaView>
  );
};

export default TopBar;
