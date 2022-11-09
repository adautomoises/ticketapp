import React from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';

import {
  Container,
  ImageWrapper,
  Image,
  ContainerButtonLeft,
  ContainerButtonRight,
  ScrollLeft,
  IconScrollLeft,
  ScrollRight,
  IconScrollRight,
  ContainerTitle,
  Title,
  ContainerSubTitle,
  SubTitle,
  ImageIndexes
} from './styles';

interface Props {
  imageUrl: {
    id: string;
    photo: string;
    title: string;
    subtitle: string;
  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function Slider({ imageUrl }: Props) {
  const [ imageIndex, setImageIndex ] = React.useState(0);

  const indexChanged = React.useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <FlatList
        data={imageUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ImageWrapper>
              <Image
                style={{}}
                source={{uri: item.photo}}
                resizeMode={'contain'}
              />
              <ContainerTitle>
                <Title>{item.title}</Title>
              </ContainerTitle>
              <ContainerSubTitle>
                <SubTitle>{item.subtitle}</SubTitle>
              </ContainerSubTitle>
          </ImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        pagingEnabled
      />

      <ImageIndexes>
        {
          imageUrl.map((item, index) => (
            <Bullet 
              key={String(item.id)}
              active={index === imageIndex} 
            />
          ))
        }
      </ImageIndexes>

      <ContainerButtonLeft>
        <ScrollLeft onPress={() => { console.log('chevron-left')}}>
          <IconScrollLeft name={'chevron-left'} />
        </ScrollLeft>
      </ContainerButtonLeft>

      <ContainerButtonRight>
        <ScrollRight onPress={() => { console.log('chevron-right')}}>
          <IconScrollRight name={'chevron-right'} />
        </ScrollRight>
      </ContainerButtonRight>

    </Container>
  );
}