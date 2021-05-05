import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantList } from '../components/restaurant-list.component';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { Search } from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { FavoritesBar } from '../../../components/Favorites/favorites-bar.component';
import { FadeInView } from '../../../components/animations/fade.animation';

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
  const navigateToDetailsScreen = (restaurant) =>
    navigation.navigate('RestaurantDetailScreen', { restaurant });
  const [isToggled, setIsToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);
  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled((prevVal) => !prevVal)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading && (
        <ActivityIndicatorContainer>
          <Loading size={50} animating color={Colors.red400} />
        </ActivityIndicatorContainer>
      )}
      <FadeInView>
        <RestaurantList
          restaurants={restaurants}
          navigateToDetailsScreen={navigateToDetailsScreen}
        />
      </FadeInView>
    </SafeArea>
  );
};
