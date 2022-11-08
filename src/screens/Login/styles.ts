import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import theme from '../../styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [`${theme.colors.Blue_1}`, `${theme.colors.Blue_2}`]
})`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const HeaderSubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
`;


export const Form = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(320)}px;

  justify-content: center;
  align-items: center;
`;

export const FormInputLogin = styled(TextInput)`
  width: ${RFValue(300)}px;
  height: ${RFValue(50)}px;
  font-size: ${RFValue(16)}px;

  padding: 16px;
  padding-left: 32px;
  margin-bottom: 8px;
  border-width: 1px;
  border-radius: ${RFValue(10)}px;
  background-color: white;
`;

export const FormInputPassword = styled(TextInput)`
  width: ${RFValue(300)}px;
  height: ${RFValue(50)}px;
  font-size: ${RFValue(16)}px;

  padding: 16px;
  padding-left: 32px;
  margin-bottom: 8px;
  border-width: 1px;
  border-radius: ${RFValue(10)}px;
  background-color: white;
`;

export const Button = styled(RectButton)`
  width: ${RFValue(300)}px;
  height: ${RFValue(50)}px;

  justify-content: center;
  align-items: center;

  margin-top: ${RFValue(50)}px;
  border-radius: ${RFValue(5)}px;
  background-color: white;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_600};
  color: ${({theme}) => theme.colors.Blue_2};
`;

export const FooterTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
  opacity: 0.7;
  margin-bottom: 50px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
`;

export const ContainerIcon = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  justify-content: center;
  align-items: center;

  border-radius: ${RFValue(10)}px;
  background-color: white;
`;