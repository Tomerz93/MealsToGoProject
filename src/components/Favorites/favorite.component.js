import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import { TouchableOpacity } from 'react-native';

const FavoriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-radius: 50px;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 5;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, toggleFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites[restaurant.placeId];
  return (
    <FavoriteButton
      onPress={() => {
        toggleFavorites(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  );
};
