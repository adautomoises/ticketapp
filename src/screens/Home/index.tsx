import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { CLIENT_ID } = process.env;

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

  React.useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('https://api.unsplash.com/search/photos?page=1&query=technology&client_id=sbdxwt0hDA25_eQ0hQ1DK0-Cq4rUHZEuZRW1lQHfoz0');
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
  },[]);

  const eventData = 
  [
    {
      id: '1', 
      name: 'Nome do Evento', 
      date: '9 Nov - 9 Dez', 
      location:'Rua dos Bobos, 0', 
      image: 'https://source.unsplash.com/random'
    }, 
    {
      id: '2', 
      name: 'Nome do Evento', 
      date: '9 Nov - 9 Dez', 
      location:'Rua dos Bobos, 0', 
      image: 'https://source.unsplash.com/random/1'
    }, 
  ]

  const eventCarousel = 
  [
    {
      id: '1', 
      photo: 'https://saboresdacidade.com/wp-content/uploads/2019/11/AA7EE845-3C02-48A5-8145-C72B6F996779.jpg',
      title: 'Cultural',
      subtitle: 'Rota da Gastronomia'
    },
    {
      id: '2', 
      photo: 'https://saboresdacidade.com/wp-content/uploads/2019/11/AA7EE845-3C02-48A5-8145-C72B6F996779.jpg',
      title: `Rota da\nGastronomia`,
      subtitle: 'Rota da Gastronomia'
    },
    {
      id: '3', 
      photo: 'https://saboresdacidade.com/wp-content/uploads/2019/11/AA7EE845-3C02-48A5-8145-C72B6F996779.jpg',
      title: 'Gastronomia Cultural',
    },
  ]

  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='white'
        translucent
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

      {/* <Slider imageUrl = { eventCarousel } /> */}

      <Carousel images = { eventCarousel }  />
      
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
    shadowColor: 'black'
  }
}); 