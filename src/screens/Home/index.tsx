import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Categories } from '../../Components/Categories';
import { Slider } from '../../Components/Slider';
import { Carousel } from '../../Components/Carousel';
import { HighlightCard } from '../../Components/HighlightCard';

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
  CategoriesViewAllTitle,
  EventsCards,
  HighlightCardHeader,
  HighlightCardHeaderTitle,
  HighlightCardContent,
  HighlightsCards,
} from './styles';

export function Home(){
  const eventData = 
  [
    {
      id: '1', 
      name: 'Nome do Evento', 
      date: '9 Nov - 9 Dez', 
      location:'Rua dos Bobos, 0', 
      image: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
    }, 
  ]

  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
      />
      <Header style={styles.DropShadow}>
        <LogoSvg width={RFValue(119)} height={RFValue(29)} fill={theme.colors.Gray_Black}/>
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

      {/* <Slider 
        imageUrl = {
          [
            {id: '1', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
            {id: '2', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
            {id: '3', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
          ]
        } 
      /> */}

      <Carousel 
        images = {
          [
            {id: '1', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
            {id: '2', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
            {id: '3', photo: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
          ]
        } 
      />
      
      <EventsCards>
        <HighlightsCards id={'1'}>
          <HighlightCardHeader>
            <HighlightCardHeaderTitle>Em Destaques</HighlightCardHeaderTitle>
          </HighlightCardHeader>
          <HighlightCardContent>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
          </HighlightCardContent>
        </HighlightsCards>
        <HighlightsCards id={'2'}>
          <HighlightCardHeader>
            <HighlightCardHeaderTitle>Online</HighlightCardHeaderTitle>
          </HighlightCardHeader>
          <HighlightCardContent>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
          </HighlightCardContent>
        </HighlightsCards>
        <HighlightsCards id={'3'}>
          <HighlightCardHeader>
            <HighlightCardHeaderTitle>Esportivo</HighlightCardHeaderTitle>
          </HighlightCardHeader>
          <HighlightCardContent>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
          </HighlightCardContent>
        </HighlightsCards>
        <HighlightsCards id={'4'}>
          <HighlightCardHeader>
            <HighlightCardHeaderTitle>Cultural</HighlightCardHeaderTitle>
          </HighlightCardHeader>
          <HighlightCardContent>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
            <HighlightCard eventData={eventData}/>
          </HighlightCardContent>
        </HighlightsCards>
      </EventsCards>

    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 16,
    shadowColor: 'black',
  }
}); 