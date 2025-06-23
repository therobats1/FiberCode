import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import GradientText from '../components/GradientText';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Opening() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  // firebase log in 
  const handleLogin = async () => {
    const email = Email.trim();
    const password = Password.trim();

    if (!email || !password) {
      return Alert.alert('Missing Fields', 'Please enter both email and password.');
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleSignUp = async () => {
    const email = Email.trim();
    const password = Password.trim();

    if (!email || !password) {
      return Alert.alert('Missing Fields', 'Please enter both email and password.');
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created & signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Sign Up Error', 'That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Sign Up Error', 'That email address is invalid!');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Sign Up Error', 'Password should be at least 6 characters!');
      } else {
        Alert.alert('Sign Up Error', error.message);
      }
    }
  };

  // login/signup UI 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fibarcode</Text> 
      <GradientText text="Thread that is Read" style={styles.subtitle} />

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={Email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={Password}
        secureTextEntry
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    marginBottom: 50,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
