import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/resutrant-info.component';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchBarContainer>
      <Searchbar />
    </SearchBarContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(i) => i.name}
    />
  </SafeArea>
);
