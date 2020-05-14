import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { THEME } from '$constants/theme.ts';
import { MainNavigation } from '$navigation/MainNavigation';
import { ModalScreen } from '$screens/ModalScreen';
import { getSettings } from '$modules/user/actions';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export const AppNavigation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

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
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyModal"
          component={ModalScreen}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
