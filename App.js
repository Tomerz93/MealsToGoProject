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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
// <Entypo name="map" size={24} color="black" />
// <Feather name="settings" size={24} color="black" />
// <Ionicons name="restaurant-outline" size={24} color="black" />

const SettingsScreen = () => (
  <View>
    <Text>Settings</Text>
  </View>
);
const MapScreen = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

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
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name={ROUTES.Restaurant} component={RestaurantsScreen} />
          <Tab.Screen name={ROUTES.Settings} component={SettingsScreen} />
          <Tab.Screen name={ROUTES.Map} component={MapScreen} />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
