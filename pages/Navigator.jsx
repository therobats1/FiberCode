import React from 'react';
import { Button, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Opening from './Opening';

const Tab = createBottomTabNavigator();

// Diffrent pages in App 
function UserProfile({navigation}) {
  return <Button title='Log out' on onPress={() => navigation.navigate("Opening")}></Button>;
}
function Setting() {
  return <Text></Text>;
}
function Scan() {
  return <Text></Text>;
}

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
          borderRadius: 1000,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 6,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
      })}
    >
      <Tab.Screen name="My profile" component={UserProfile} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
