import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GradientText from '../vendor/components/GradientText';

export default function Opening() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Fibarcode</Text>
      <GradientText text= "Thread that is Read" style={styles.subtitle} /> {/*orange to red gradient*/}\

    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Log In')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign Up')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 90,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 15, 
  },

  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginHorizontal: 5, // for older RN if gap unsupported
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
