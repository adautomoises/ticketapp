import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: ${RFValue(144)}px;
  height: ${RFValue(180)}px;

  padding: 16px;
  margin: 16px 10px 16px 13px;
  border-radius: 3px;
  background-color: white;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(100)}px;
`;

export const EventNameText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.Gray_Black};
  line-height: ${RFValue(18)}px;
`;

export const EventDateText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_500};
  font-size: ${RFValue(7)}px;
  color: ${({theme}) => theme.colors.Gray_Dark};
  line-height: ${RFValue(10.5)}px;
`;

export const EventLocationText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_500};
  font-size: ${RFValue(7)}px;
  color: ${({theme}) => theme.colors.Gray_Dark};
  line-height: ${RFValue(18)}px;
`;


export const ContainerDate = styled.View`
  align-items: center;
  flex-direction: row;

  margin: 6px 0 9px 0;
`;

export const DateIcon = styled(Feather)`
  font-size: ${RFValue(12)}px;
  margin-right: 5px;
`;

export const ContainerLocation = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const LocationIcon = styled(Feather)`
  font-size: ${RFValue(12)}px;
  margin-right: 5px;
`;