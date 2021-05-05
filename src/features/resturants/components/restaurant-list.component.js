import React from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { RestaurantInfo } from './restaurant-info.component';

const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantList = ({ restaurants, navigateToDetailsScreen }) => (
  <RestaurantListContainer
    data={restaurants}
    renderItem={({ item: restaurant }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigateToDetailsScreen(restaurant);
          }}
        >
          <RestaurantInfo key={restaurant.name} restaurant={restaurant} />
        </TouchableOpacity>
      );
    }}
    keyExtractor={(i) => i.name}
  />
);
