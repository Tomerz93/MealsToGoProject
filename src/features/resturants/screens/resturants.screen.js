import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfo } from '../components/resutrant-info.component';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { Search } from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const ActivityIndicatorContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <ActivityIndicatorContainer>
          <Loading size={50} animating color={Colors.red400} />
        </ActivityIndicatorContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(i) => i.name}
      />
    </SafeArea>
  );
};
