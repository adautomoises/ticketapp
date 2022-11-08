import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  Image,
  EventNameText,
  EventDateText,
  EventLocationText,
  ContainerDate,
  DateIcon,
  ContainerLocation,
  LocationIcon,
} from './styles';

interface Props {
  eventData: {
    id: string;
    name: string;
    date: string;
    image: string;
    location: string;
  }[]
}

export function HighlightCard({ 
  eventData
}: Props){

  return (
    <Container style={styles.DropShadow}>
      <Image 
        style={styles.image}
        key={eventData[0].id}
        source={{uri: eventData[0].image}}
      />
        <EventNameText>{eventData[0].name}</EventNameText>

      <ContainerDate>
        <DateIcon name={'calendar'}/>
        <EventDateText>{eventData[0].date}</EventDateText>
      </ContainerDate>

      <ContainerLocation>
        <LocationIcon name={'map-pin'} />
        <EventLocationText>{eventData[0].location}</EventLocationText>
      </ContainerLocation>
    </Container>
  );
}

const styles = StyleSheet.create({
  DropShadow: {
    elevation: 8,
    shadowColor: 'black',
    shadowRadius: 8,
  },
  image: {
    resizeMode: 'contain',
    marginBottom: 7
  }
}); 