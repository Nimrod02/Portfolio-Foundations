import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Welcome = ( { navigation } ) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my app!</Text>
      <Button title="Continue" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Welcome;
