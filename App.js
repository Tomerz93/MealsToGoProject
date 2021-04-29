import React from 'react';
import { RestaurantsScreen } from './src/features/resturants/screens/resturants.screen';
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
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
