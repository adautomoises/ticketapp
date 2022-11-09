import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 23px;
`;

export const ImageWrapper = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: ${RFValue(269)}px;
  opacity: 0.5;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: center;
  bottom: 0;
  position: absolute;
`;

export const ContainerButtonLeft = styled.View`
  top: 50%;
  left: 0;
  position: absolute;
`;

export const ContainerButtonRight = styled.View`
  top: 50%;
  right: 0;
  position: absolute;
`;

export const ScrollLeft = styled.TouchableOpacity``;

export const IconScrollLeft = styled(Feather)`
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(24)}px;
`;

export const ScrollRight = styled.TouchableOpacity``;

export const IconScrollRight = styled(Feather)`
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(24)}px;
`;

export const ContainerTitle = styled.View`
  width: ${RFValue(300)}px;

  justify-content: center;
  align-items: center;

  top: 40%;
  position: absolute;
`;

export const ContainerSubTitle = styled.View`
  width: ${RFValue(300)}px;

  justify-content: center;
  align-items: center;

  top: 25%;
  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(40)}px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(16)}px;
`;
