import React from 'react';

import LottieView from 'lottie-react-native';
import LoadingCar from '../../assets/logoanimation.json';

import {
  Container
} from './styles';

export function LoadAnimation(){
  return (
    <Container>
      <LottieView 
        source={LoadingCar}
        style={{ height: 500 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}