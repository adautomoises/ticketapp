import React from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import Routes from './src/routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });
  
  if(fontsLoaded){
    SplashScreen.hideAsync();
  }

  if(!fontsLoaded){
    return (
      <View style={{flex: 1, backgroundColor: theme.colors.Blue_1}}>
      </View>
    )
  }  
  return (
    <ThemeProvider theme={theme}>
      <Routes /> 
    </ThemeProvider>
  );
}