import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const uid = auth().currentUser?.uid;
        if (!uid) return;
        const doc = await firestore().collection('users').doc(uid).get();
        if (doc.exists) {
          setUsername(doc.data().username || '');
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load profile.');
      }
    };
    loadUserData();
  }, []);

  const handleSave = async () => {
    try {
      const uid = auth().currentUser?.uid;
      if (!uid) return;
      await firestore().collection('users').doc(uid).set(
        {
          username: username.trim(),
          updatedAt: firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      Alert.alert('Success', 'Username updated!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Failed to save changes.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter new username"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
