import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import welcomeStyle from '../styles/welcomeStyle';


const Welcome = ( { navigation } ) => {


  return (
    <SafeAreaView style={welcomeStyle.Container}>

      <View style={welcomeStyle.welcomeContainer}>
        <View style={welcomeStyle.welcomeTextContainer}>
          <Text style={welcomeStyle.welcomeText}>Welcome to</Text>
          <Image style={welcomeStyle.logo} source={require('../styles/images/logo-white.png')} />
          <Text style={welcomeStyle.welcomeTextTitle}>WaveScan</Text>
          <Text style={welcomeStyle.welcomeTextDescription}>
            WaveScan is a mobile application that allows you to scan your network and save your results.
          </Text>
        </View>
      </View>  

      <View style={welcomeStyle.buttonsContainer}> 
        <Text style={welcomeStyle.registerText}>Register to save your speed tests and get even more data!</Text>
        <View style={welcomeStyle.registerButtonContainer}>
          <TouchableOpacity style={welcomeStyle.btn} onPress={() => navigation.navigate('Home')}>
            <Text style={welcomeStyle.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={welcomeStyle.continueButtonContainer}>
          <TouchableOpacity style={welcomeStyle.btn} title="Continue" onPress={() => navigation.navigate('Home')}>
            <Text style={welcomeStyle.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Welcome;
