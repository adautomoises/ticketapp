import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface Color {
  id: string;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(71)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  position: absolute;
  padding: 24px;
`;

export const ExploreButton = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;

  align-items: center;
  justify-content: center;
`;

export const IconExploreButton = styled(Feather)`
  color: ${({theme}) => theme.colors.Gray_Black};
  font-size:  ${RFValue(24)}px;
`;

export const CategoriesSection = styled.View`
  width: 100%;
  height: ${RFValue(190)}px;

  margin-top: 111px;
`;

export const CategoriesHeader = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
`;

export const CategoriesHeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.Gray_Black};;
`;

export const CategoriesViewAllButton = styled(TouchableOpacity)``;

export const CategoriesViewAllTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_600};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.Blue_1};;
`;

export const CategoriesViewAll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24
  },
})``;

export const EventsCards = styled.View`
  width: 100%;
`;

export const HighlightsCards = styled.ScrollView.attrs<Color>({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24
  },
})`
  height: ${RFValue(260)}px;
  background-color: ${({ id }) => id % 2 == 0 ? 'rgba(0, 192, 255, 0.4)' : 'white'};
`;

export const HighlightCardHeader = styled.View`
  width: 100%;

  margin: 16px 0;
`;

export const HighlightCardHeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_700};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.Gray_Black};
`;

export const HighlightCardContent = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
