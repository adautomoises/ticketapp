import React from 'react';
import { TextInputProps, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  Container,
  IconContainer,
  IconContainerPassword,
  InputText
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}


export function PasswordInput({
  iconName,
  value,
  ...rest
}: InputProps){
  const theme = useTheme();
  const [ isPasswordVisible, setIsPasswordVisible ] = React.useState(true);
  const [ isFocused, setIsFocused ] = React.useState(false);
  const [ isFilled, setIsFilled ] = React.useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleChangeVisibilityPassword(){
    setIsPasswordVisible(prevState => !prevState);
  }

  return (
    <Container 
      // style={styles.DropShadow}
    >
      <IconContainer isFocused={isFocused}>
        <Feather 
          name={iconName}
          size={24}
          color={ (isFocused || isFilled) ? theme.colors.Blue_5 : theme.colors.Gray_Black}
        />
      </IconContainer>

      <InputText {...rest}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        autoCorrect={false}
      />

      <BorderlessButton
        onPress={handleChangeVisibilityPassword}
      >
        <IconContainerPassword
          isFocused={isFocused}
        >
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={ (isFocused) ? theme.colors.Blue_5 : theme.colors.Gray_Black}
          />
        </IconContainerPassword>
      </BorderlessButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 8,
    shadowColor: 'black',
  }
}); 