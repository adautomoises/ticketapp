import React from 'react';
import { TextInputProps, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({
  iconName,
  value,
  ...rest
}: InputProps){
  const theme = useTheme();
  const [ isFocused, setIsFocused ] = React.useState(false);
  const [ isFilled, setIsFilled ] = React.useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }
  
  return (
    <Container 
      // style={styles.DropShadow}
    >
      <IconContainer
        isFocused={isFocused}
      >
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
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 8,
    shadowColor: 'black',
  }
}); 