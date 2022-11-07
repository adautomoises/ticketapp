import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: ${RFValue(230)}px;
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
  top: 25%;
  position: absolute;
`;

export const ContainerSubTitle = styled.View`
  top: 40%;
  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(12)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size: ${RFValue(24)}px;
`;
