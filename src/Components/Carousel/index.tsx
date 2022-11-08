import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet
} from 'react-native';

import { Bullet } from '../Bullet';

import {
  Container,
  ImageWrapper,
  Image,
  ImageIndexes,
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
} from './styles';

type Props = {
  images: {
    id: string;
    photo: string;
  }[];
};

const MAX_WIDTH = Dimensions.get('screen').width;

export function Carousel({ images } : Props){
  const animation = React.useRef(new Animated.Value(0));
  const [ currentImage, setCurrentImage ] = React.useState(0);

  const handleAnimationLeft = () => {
    let newCurrentImage = currentImage - 1;

    if(newCurrentImage < 0){
      newCurrentImage = images.length - 1;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  const handleAnimationRight = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
      <Container>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateX: animation.current}],
            },
          ]}>
          {images.map(
            (item) => (
              <ImageWrapper key={item.id}>
                <Image 
                  key={item.id}
                  source={{uri: item.photo}} 
                  style={styles.image} 
                />
                <ContainerTitle>
                  <Title>%TEXTO DE EXEMPLO%</Title>
                </ContainerTitle>
                <ContainerSubTitle>
                  <SubTitle>%TEXTO DE EXEMPLO%</SubTitle>
                </ContainerSubTitle>
              </ImageWrapper>
          ))}
        </Animated.View>
        <ImageIndexes>
          {images.map((_item, index) => (
            <Bullet 
              key={index}
              active={index === currentImage}
            />
          ))}
        </ImageIndexes>

        <ContainerButtonLeft>
          <ScrollLeft onPress={handleAnimationLeft}>
            <IconScrollLeft name={'chevron-left'} />
          </ScrollLeft>
        </ContainerButtonLeft>

        <ContainerButtonRight>
          <ScrollRight onPress={handleAnimationRight}>
            <IconScrollRight name={'chevron-right'} />
          </ScrollRight>
        </ContainerButtonRight>
      </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain'
  }
});