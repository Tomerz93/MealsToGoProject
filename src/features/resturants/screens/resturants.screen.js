import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { Search } from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );
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
        renderItem={({ item: restaurant }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetailScreen', { restaurant })
              }
            >
              <RestaurantInfo key={restaurant.name} restaurant={restaurant} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(i) => i.name}
      />
    </SafeArea>
  );
};
