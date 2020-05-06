import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { THEME } from '$constants/theme.ts';
import { MainScreen } from '$screens/MainScreen';
import { NoteScreen } from '$screens/NoteScreen';

const Stack = createStackNavigator();

export const MainNavigation: React.FC = () => {
  return (
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
    >
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'My home',
        }}
      />
      <Stack.Screen
        name="Notes"
        component={NoteScreen}
        options={({ route }) => ({
          title: route.name,
          // title: route.params?.name,
        })}
      />
    </Stack.Navigator>
  );
};
