import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [`${theme.colors.Blue_1}`, `${theme.colors.Blue_2}`]
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;