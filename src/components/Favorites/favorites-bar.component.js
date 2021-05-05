import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../Restaurant/compact-restaurant.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!Object.keys(favorites).length) return null;
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Object.keys(favorites).map((key) => (
          <TouchableOpacity
            key={key}
            onPress={() => {
              onNavigate('RestaurantDetailScreen', {
                restaurant: favorites[key],
              });
            }}
          >
            <Spacer position="left" size="medium">
              <CompactRestaurantInfo restaurant={favorites[key]} />
            </Spacer>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </FavoritesWrapper>
  );
};
