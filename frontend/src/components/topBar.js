import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import topBarStyle from '../styles/topBarStyle';

const TopBar = () => {
  return (
    <SafeAreaView style={topBarStyle.container}>
      <Text style={topBarStyle.title}>WaveScan</Text>
    </SafeAreaView>
  );
};

export default TopBar;
