import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { THEME } from '$constants/theme.ts';
import { MainNavigation } from '$navigation/MainNavigation';
import { ModalScreen } from '$screens/ModalScreen';

const Stack = createStackNavigator();

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.mainColor,
          },
          headerTintColor: THEME.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        headerMode="none"
      >
        <Stack.Screen
          name="Main"
          component={MainNavigation}
        />
        <Stack.Screen
          name="MyModal"
          component={ModalScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
