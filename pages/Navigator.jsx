import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserProfile from './UserProfile';
import Scan from './Scan';

const Tab = createBottomTabNavigator();

// Setting page 
function Setting() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Bottom navigation 
export default function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          let iconName;
          if (route.name === 'My profile') iconName = 'user';
          else if (route.name === 'Scan') iconName = 'camerao';
          else if (route.name === 'Setting') iconName = 'setting';
          return <AntDesign name={iconName} size={30} color={color} />;
        },

        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
          paddingTop: 10,
          
          backgroundColor: '#FAFAFA',
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: 'gray',
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 6,
        },
        tabBarLabelStyle: { fontSize: 13 },
      })}

      // pages to navigate to 
    >
      <Tab.Screen name="My profile" component={UserProfile} /> 
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
