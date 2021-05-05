import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { LocationContextProvider } from '../../services/locations/location.context';
import { RestaurantContextProvider } from '../../services/restaurants/restaurant.context';

import { SettingsNavigator } from './settings.navigatior';
const Tab = createBottomTabNavigator();

const ROUTES = {
  Restaurant: 'Restaurant',
  Settings: 'Settings',
  Map: 'Map',
};

const TAB_ICONS = {
  Restaurant: 'restaurant-outline',
  Settings: 'settings',
  Map: 'map',
};

const getIcon = (name, color, size) => (
  <Ionicons name={name} size={size} color={color} />
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => getIcon(iconName, color, size),
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name={ROUTES.Restaurant}
            component={RestaurantNavigator}
          />
          <Tab.Screen name={ROUTES.Map} component={MapScreen} />
          <Tab.Screen name={ROUTES.Settings} component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
