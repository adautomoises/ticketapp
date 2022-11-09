import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  Category,
  CategoryButton,
  Text,
  Icon
} from './styles';

interface Props {
  name: string;
  icon: string;
}

export function Categories({ name, icon }: Props){
  return (
    <Container >
      <Category style={styles.DropShadow}>
        <CategoryButton>
          <Icon name={icon} />
        </CategoryButton>
      </Category>
      <Text>{name}</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 12,
    shadowColor: 'black'
  }
});