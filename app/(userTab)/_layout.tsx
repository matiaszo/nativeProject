import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

export default function UserLayout() {

  return (
    <Tabs screenOptions={{tabBarActiveBackgroundColor: '#000000', tabBarInactiveBackgroundColor: '#000000'}}>
        <Tabs.Screen name="index" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={require("@/assets/images/home.png")} width={50} height={50}/>)}}></Tabs.Screen>
        <Tabs.Screen name="schedule" options={{headerShown: false,tabBarShowLabel: false, tabBarIcon: () =>(<Image source={require("@/assets/images/calendar.png")} width={50} height={50}/>)}}></Tabs.Screen>
        <Tabs.Screen name="prices" options={{headerShown: false, tabBarShowLabel: false,tabBarIcon: ()  =>(<Image source={require("@/assets/images/tags.png")} width={50} height={50}/>)}}></Tabs.Screen>
  </Tabs>
  );
}
