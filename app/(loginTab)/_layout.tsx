import { Tabs } from 'expo-router';
import React from 'react';
import { Text, Image } from 'react-native';
import loginLogo from "@/assets/images/login.png";
import passwordLogo from "@/assets/images/function.png";
import functionLogo from "@/assets/images/password.png";

export default function TabLayout() {

  return (
    <Tabs screenOptions={{tabBarActiveBackgroundColor: '#5b4734', tabBarInactiveBackgroundColor: '#5b4734'}}>
      <Tabs.Screen name="index" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={loginLogo} width={50} height={50}/>)}}></Tabs.Screen>
      <Tabs.Screen name="register" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={passwordLogo} width={50} height={50}/>)}}></Tabs.Screen>
      <Tabs.Screen name="recpassword" options={{headerShown: false, tabBarShowLabel: false,tabBarIcon: ()  =>(<Image source={functionLogo} width={50} height={50}/>)}}></Tabs.Screen>
    </Tabs>
  );
}
