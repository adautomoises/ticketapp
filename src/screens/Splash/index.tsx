import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo.svg';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import {
  Container
} from './styles';

export function Splash(){
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation();

  const logoStyle = useAnimatedStyle(() => {
    return{
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
        translateX: interpolate(
          splashAnimation.value, 
          [0, 50], 
          [-50, 0],
          Extrapolate.CLAMP
          )
        }
      ]
    }
  });

  function startApp(){
    navigation.navigate('Login');
  };

  React.useEffect(()=>{
    splashAnimation.value = withTiming(
      50, 
      { duration: 2000 },
      () => {
        'worklet';
        runOnJS(startApp)();
      }
      );
  },[]);

  return (
    <Container>
      <StatusBar 
          barStyle="dark-content"
          translucent
          backgroundColor= "transparent"
      />
      <Animated.View style={
        [
          logoStyle, 
          {position: 'absolute'}
          ]
        }>
        <LogoSvg width={280} height={80} />
      </Animated.View>
    </Container>
  );
}
