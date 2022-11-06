import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(104)}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;

  margin-right: 16px;
`;

export const Category = styled.View`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;

  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: ${RFValue(52)}px;
  margin-bottom: 13px;
`;

export const CategoryButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
    color: black;
    font-size: ${RFValue(48)}px;
`;
export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(15)}px;
  color: black;
`;