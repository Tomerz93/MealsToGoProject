import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../features/account/screens/account.screen';
import { AuthScreen } from '../../features/account/screens/auth.screen';
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>
    <Stack.Screen name="Login" component={AuthScreen}></Stack.Screen>
  </Stack.Navigator>
);
