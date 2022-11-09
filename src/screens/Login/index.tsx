import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Input } from '../../Components/Input';
import { PasswordInput } from '../../Components/PasswordInput';

import LogoSvg from '../../assets/logo_azul.svg';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';
import FacebookSvg from '../../assets/facebook.svg';

import theme from '../../styles/theme';

import {
  Container,
  Header,
  HeaderLogo,
  HeaderTitle,
  HeaderSubTitle,
  Form,
  ContainerForgotPassword,
  ForgotPassword,
  ForgotPasswordText,
  ButtonSignIn,
  ButtonSignInText,
  ContainerDivider,
  Divider,
  DividerTitle,
  LoginSocial,
  ContainerIcon,
  BoxLogin,
  LoginWithGoogle,
  LoginWithApple,
  LoginWithFacebook,
  Footer,
  FooterText,
  ButtonSignUp,
  ButtonSignUpText
} from './styles';

export function Login(){
  const navigation = useNavigation();
  const [ name, setName ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  function handleSignIn(){
    navigation.navigate('InitialHome');
  };
  function handleSignUp(){
    navigation.navigate('InitialHome');
  };

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <HeaderLogo>
              <LogoSvg 
                width={300} 
                height={180}
              />
            </HeaderLogo>
            <HeaderTitle>Bem-vindo!</HeaderTitle>
            <HeaderSubTitle>Entre com sua conta</HeaderSubTitle>
          </Header>
          <Form>
            <Input 
              iconName={'mail'} 
              placeholder={'Usuário'}
              onChangeText={setName}
              value={name}  
            />
            <PasswordInput 
              iconName={'lock'} 
              placeholder={'Senha'}
              onChangeText={setPassword}
              value={password}  
            />
            <ContainerForgotPassword>
              <ForgotPassword>
                <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
              </ForgotPassword>
            </ContainerForgotPassword>
            <ButtonSignIn 
              onPress={handleSignIn} 
              // style={styles.DropShadow}
            >
              <ButtonSignInText>Entrar</ButtonSignInText>
            </ButtonSignIn>
          </Form>

          <ContainerDivider>
            <Divider></Divider>
            <DividerTitle>OU</DividerTitle>
            <Divider></Divider>
          </ContainerDivider>

          <LoginSocial>
            <ContainerIcon 
              // style={styles.DropShadow}
            >
                <GoogleSvg width={36} height={36} />
              {/* <BoxLogin>
                <LoginWithGoogle>Login com Google</LoginWithGoogle>
              </BoxLogin> */}
            </ContainerIcon>
            <ContainerIcon 
              // style={styles.DropShadow}
            >
                <AppleSvg width={36} height={36} fill={theme.colors.Gray_Black} />
              {/* <BoxLogin>
                <LoginWithApple>Login com Apple</LoginWithApple>
              </BoxLogin> */}
            </ContainerIcon>
            <ContainerIcon 
              // style={styles.DropShadow}
            >
                <FacebookSvg width={36} height={36} fill={theme.colors.Blue_5}/>
              {/* <BoxLogin>
                <LoginWithFacebook>Login com Facebook</LoginWithFacebook>
              </BoxLogin> */}
            </ContainerIcon>
          </LoginSocial>

          <Footer>
              <FooterText>Não possui uma conta? </FooterText>
              <ButtonSignUp onPress={handleSignUp}>
                <ButtonSignUpText>Cadastre-se</ButtonSignUpText>
              </ButtonSignUp>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 8,
    shadowColor: 'black',
  }
}); 