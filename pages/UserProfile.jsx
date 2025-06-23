import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import auth, { getAuth, signOut } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import EditProfile from './EditProfile'; 
import F from './UserIcons/F.png';

const Stack = createNativeStackNavigator();

const ORANGE = '#FF6E00';
const RED = '#FF3B30';

// Profile screen component
function UserProfileScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const uid = auth().currentUser?.uid;
      if (!uid) return;

      try {
        const doc = await firestore().collection('users').doc(uid).get();
        if (doc.exists) {
          setUsername(doc.data().username || 'User');
        }
      } catch (err) {
        console.log('Failed to fetch username:', err);
      }
    });

    return unsubscribe;
  }, [navigation]);

  const LogOut = () => {
    signOut(getAuth()).then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Avatar & Name */}
        <Image source={F} style={styles.avatar} />
        <Text style={styles.name}>{username}</Text>

        {/* Scans & Favorites */}
        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.stat}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Scans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stat}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & Feedback</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={LogOut}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Navigator wrapper
export default function UserProfile() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainProfile" component={UserProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  card: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginTop: 40,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: ORANGE,
    marginBottom: 15,
  },
  
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: RED,
    marginBottom: 16,

  },

  menuItem: {
    width: '100%',
    paddingVertical: 12,
    borderBottomColor: ORANGE,
    borderBottomWidth: 1,
  },

  menuText: {
    fontSize: 16,
    color: 'black',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 24,
  },

  stat: {
    alignItems: 'center',
    flex: 1,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: ORANGE,
  },

  statLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },

  logoutButton: {
    marginTop: 50,
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },

  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
