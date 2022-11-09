import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Header = styled.View`
  width: ${RFValue(300)}px;

`;

export const HeaderLogo = styled.View`
  width: ${RFValue(300)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const HeaderSubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const Form = styled.View`
  width: ${RFValue(300)}px;

  justify-content: center;
  align-items: center;

  /* margin: 28px 0; */
  padding: 28px 0;
`;

export const ContainerForgotPassword = styled.View`
  width: ${RFValue(300)}px;
  height: 60px;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_600};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.Blue_2};
`;

export const ButtonSignIn = styled(RectButton)`
  width: ${RFValue(300)}px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border-radius: ${RFValue(5)}px;
  background-color: ${({theme}) => theme.colors.Blue_5};
`;

export const ButtonSignInText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_500};
  color: white;
`;

export const ContainerDivider = styled.View`
  width: ${RFValue(300)}px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  margin-bottom: 16px;
`;

export const Divider = styled.View`
  width: ${RFValue(100)}px;
  border: 1px solid ${({theme}) => theme.colors.Gray_Black};
  opacity: 0.5;
`;

export const DividerTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const LoginSocial = styled.View`
  width: ${RFValue(300)}px;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  margin-bottom: 32px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  width: ${RFValue(80)}px;
  height: ${RFValue(50)}px;
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  border: 2px solid ${({theme}) => theme.colors.Gray_light};;
  border-radius: ${RFValue(5)}px;
  background-color: white;
`;

export const BoxLogin = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LoginWithGoogle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Blue_5};
`;

export const LoginWithApple = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Blue_5};
`;

export const LoginWithFacebook = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  color: ${({theme}) => theme.colors.Blue_5};
`;

export const Footer = styled.View`
  width: ${RFValue(300)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const FooterText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const ButtonSignUpText = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.Blue_2};
`;