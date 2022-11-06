import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Home } from '../screens/Home';
import { Explore } from '../screens/Explore';
import { MyTickets } from '../screens/MyTickets';
import { Favorites } from '../screens/Favorites';
import { Profile } from '../screens/Profile';

import HomeSvg from '../assets/home.svg';
import ExploreSvg from '../assets/explore.svg';
import MyTicketsSvg from '../assets/tickets.svg';
import FavoritesSvg from '../assets/favorites.svg';
import ProfileSvg from '../assets/profile.svg';

const { Navigator, Screen} = createBottomTabNavigator();

export default function Routes() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Navigator 
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.Blue_1,
      tabBarInactiveTintColor: theme.colors.Gray_Dark,
      tabBarStyle: {
        paddingVertical: 20,
        paddingBottom: 16,
        height: 85,
      }
    }}>
        <Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: (({color}) => (
              <HomeSvg width={24} height={24} fill={color} />
            ))
          }}
        />
        <Screen 
          name="Explore" 
          component={Explore}
          options={{
            tabBarIcon: (({ color }) => (
              <ExploreSvg width={24} height={24} fill={color}/>
            ))
          }}
        />
        <Screen 
          name="MyTickets" 
          component={MyTickets}
          options={{
            tabBarIcon: (({ color }) => (
              <MyTicketsSvg width={24} height={24} fill={color}/>
            ))
          }}
        />
        <Screen 
          name="Favorites" 
          component={Favorites}
          options={{
            tabBarIcon: (({ color }) => (
              <FavoritesSvg width={24} height={24} fill={color}/>
            ))
          }}
        />
        <Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarIcon: (({ color }) => (
              <ProfileSvg width={24} height={24} fill={color}/>
            ))
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
