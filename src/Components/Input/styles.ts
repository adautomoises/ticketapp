import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  border-bottom-width: 0.5px;
`;

export const IconContainer = styled.View<Props>`
  width: 48px;
  height: 60px;

  justify-content: center;
  align-items: center;

  /* margin-right: 2px; */

  background-color: white;
  

  ${({theme, isFocused}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.Blue_5};
  `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;

  color: ${({theme}) => theme.colors.Gray_Dark};
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  font-size: ${RFValue(14)}px;

  padding-right: 48px;

  background-color: white;

  ${({theme, isFocused}) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.Blue_5};
  `};
`;