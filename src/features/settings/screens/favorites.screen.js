import React, { useContext } from 'react';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { RestaurantList } from '../../resturants/components/restaurant-list.component';

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const transformedFavorites = Object.keys(favorites).map((key) => ({
    ...favorites[key],
  }));
  return (
    <SafeArea>
      <RestaurantList
        restaurants={transformedFavorites}
        navigateToDetailsScreen={(restaurant) =>
          navigation.navigate('RestaurantDetailScreen', { restaurant })
        }
      />
    </SafeArea>
  );
};
