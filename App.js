import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infra/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import { Navigation } from './src/infra/navigation/index';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/locations/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!latoLoaded || !oswaldLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
  );
}
