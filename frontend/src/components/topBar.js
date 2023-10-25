import React from 'react';
import { Text, View } from 'react-native';
import topBarStyle from '../styles/topBarStyle';

const TopBar = () => {
  return (
    <View style={topBarStyle.container}>
      <Text style={topBarStyle.title}>WaveScan</Text>
    </View>
  );
};

export default TopBar;
