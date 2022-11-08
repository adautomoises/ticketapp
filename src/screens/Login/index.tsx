import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Input } from '../../Components/Input';
import { PasswordInput } from '../../Components/PasswordInput';

import LogoSvg from '../../assets/logo_branco.svg';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';

import theme from '../../styles/theme';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubTitle,
  Form,
  Button,
  Text,
  FooterTitle,
  Footer,
  ContainerIcon
} from './styles';

export function Login(){
  const navigation = useNavigation();

  function handleSignIn(){
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
            <LogoSvg />
            <HeaderTitle>Bem-vindo!</HeaderTitle>
            <HeaderSubTitle>Peça já seu ticket.</HeaderSubTitle>
          </Header>
          <Form>
            <Input iconName={'mail'} placeholder={'Usuário'} />
            <PasswordInput iconName={'lock'} placeholder={'Senha'} />

            <Button onPress={handleSignIn}>
              <Text>Entrar</Text>
            </Button>
          </Form>

          <FooterTitle>----- Ou Entre Com -----</FooterTitle>

          <Footer>
            <ContainerIcon>
              <GoogleSvg width={24} height={24} />
            </ContainerIcon>
            <ContainerIcon>
              <AppleSvg width={24} height={24} fill={theme.colors.Gray_Black} />
            </ContainerIcon>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
  );
}