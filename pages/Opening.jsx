import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../components/GradientText';

export default function Opening() {
  const navigation = useNavigation()
  const [Email,setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (

    <View style={styles.container}>

      <Text style={styles.title}>Fibarcode</Text>
      <GradientText text= "Thread that is Read" style={styles.subtitle} /> {/*orange to red gradient*/}

      <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={setEmail} //for user to be able to enter 
        value={Email}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={setPassword}
        value={Password}
        secureTextEntry={true}
      />
      
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigator')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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

  buttonRow: {
    flexDirection: 'row',
    marginTop:20,
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

  input: {
  width: '90%',
  height: 50,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 15,
  marginBottom: 15,
  backgroundColor: '#fff',
},

});
