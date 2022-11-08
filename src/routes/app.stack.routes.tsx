import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Splash } from '../screens/Splash';
import { AppTabRoutes } from './app.tab.routes';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName='Splash'>
      <Screen
       name='Splash'
       component={Splash}
      />
      <Screen
       name='Login'
       component={Login}
      />
      <Screen
       name='InitialHome'
       component={AppTabRoutes}
      />
    </Navigator>
  );
}