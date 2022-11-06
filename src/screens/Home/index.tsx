import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Categories } from '../../Components/Categories';

import LogoSvg from '../../assets/logo.svg';

import theme from '../../styles/theme';

import {
  Container,
  Header,
  ExploreButton,
  IconExploreButton,
  CategoriesSection,
  CategoriesHeader,
  CategoriesHeaderTitle,
  CategoriesViewAll,
  CategoriesViewAllButton,
  CategoriesViewAllTitle
} from './styles';

export function Home(){
  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
      />
      <Header style={styles.DropShadow}>
        <LogoSvg width={119} height={29} fill={theme.colors.Gray_Black}/>
        <ExploreButton>
          <IconExploreButton name='search'/>
        </ExploreButton>
      </Header>

      <CategoriesSection>
        <CategoriesHeader>
          <CategoriesHeaderTitle>Categorias</CategoriesHeaderTitle>
          <CategoriesViewAllButton>
            <CategoriesViewAllTitle>Ver tudo</CategoriesViewAllTitle>
          </CategoriesViewAllButton>
        </CategoriesHeader>
        <CategoriesViewAll>
          <Categories name={'Online'} icon={'wifi'} />
          <Categories name={'Online'} icon={'wifi'} />
          <Categories name={'Online'} icon={'wifi'} />
          <Categories name={'Online'} icon={'wifi'} />
        </CategoriesViewAll>
      </CategoriesSection>
    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 8,
    shadowColor: 'black'
  }
}); 