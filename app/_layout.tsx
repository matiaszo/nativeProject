// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    lobster: require('../assets/fonts/LobsterRegular.ttf'),
    eBold: require('../assets/fonts/Enriqueta-Bold.ttf'),
    eMedium: require('../assets/fonts/Enriqueta-Medium.ttf'),
    eRegular: require('../assets/fonts/Enriqueta-Regular.ttf'),
    eSemiBold: require('../assets/fonts/Enriqueta-SemiBold.ttf'),
    sen: require('../assets/fonts/Sen-VariableFont_wght.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name='register' options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name='recpassword' options={{headerShown: false}}></Stack.Screen>
    {/* <Stack.Screen name='(loginTabs)' options={{headerShown: false}}></Stack.Screen> */}
    {/* <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen> */}
    <Stack.Screen name="(userTab)" options={{headerShown: false}}></Stack.Screen>
   </Stack>
  );
}