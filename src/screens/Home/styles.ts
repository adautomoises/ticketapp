import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
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
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;

  align-items: center;
  justify-content: center;

  border-radius: 20px;
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
  line-height: ${RFValue(23)}px;
  color: black;
`;

export const CategoriesViewAllButton = styled(TouchableOpacity)``;

export const CategoriesViewAllTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.Poppins_600};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  color: ${({theme}) => theme.colors.Blue_1};;
`;

export const CategoriesViewAll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24},
})`
  width: 100%;
  flex-direction: row;
`;