import { Tabs } from 'expo-router';
import React from 'react';
import { Text, Image } from 'react-native';

export default function TabLayout() {

  return (
      <Tabs screenOptions={{tabBarActiveBackgroundColor: '#5b4734', tabBarInactiveBackgroundColor: '#5b4734'}}>
        <Tabs.Screen name="index" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={require("@/assets/images/login.png")} width={50} height={50}/>)}}></Tabs.Screen>
        <Tabs.Screen name="register" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={require("@/assets/images/function.png")} width={50} height={50}/>)}}></Tabs.Screen>
        <Tabs.Screen name="recpassword" options={{headerShown: false, tabBarShowLabel: false,tabBarIcon: ()  =>(<Image source={require("@/assets/images/password.png")} width={50} height={50}/>)}}></Tabs.Screen>
      </Tabs>
  );
}
