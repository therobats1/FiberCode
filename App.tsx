import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

import Opening from './pages/Opening';
import Navigator from './pages/Navigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Check if user is logged in through Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (u) => {
      setUser(u);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, []);

  if (initializing) return null; 

  // Show login screen or main app based on authentication status
  return (
  <SafeAreaView style={styles.container}>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {(() => {
        if (user) {
          return <Stack.Screen name="Navigator" component={Navigator} />;
        } else {
          return <Stack.Screen name="Opening" component={Opening} />;
        }
      })()}
    </Stack.Navigator>
  </NavigationContainer>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
  }, 
});
