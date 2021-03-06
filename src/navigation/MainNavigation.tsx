import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import {
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { THEME } from '$constants/theme';
import { getText } from '$utils/localisation';
import { NotesScreen } from '$screens/NotesScreen';
import { NoteScreen } from '$screens/NoteScreen';
import { CreateNoteScreen } from '$screens/CreateNoteScreen';
import { SettingsScreen } from '$screens/SettingsScreen';
import { HeaderButtonApp } from '$components/UI/HeaderButtonApp';
import { IAppState } from '$redux/store';

const HomeStack = createStackNavigator();

const headerDefaultStyle = {
  headerStyle: {
    backgroundColor: THEME.mainColor,
  },
  headerTintColor: THEME.textColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export const MainNavigation: React.FC = () => {
  const language = useSelector((state: IAppState) => state.user.language.value);

  return (
    <HomeStack.Navigator
      initialRouteName="Notes"
      screenOptions={{
        ...headerDefaultStyle,
      }}
    >
      <HomeStack.Screen
        name="Notes"
        component={NotesScreen}
        options={({ route, navigation }): StackNavigationOptions => ({
          title: getText(language, route.name.toLowerCase()),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButtonApp}>
              <Item
                title='Settings'
                iconName='settings'
                buttonStyle={styles.button}
                onPress={() => navigation.push('Settings')}
              />
            </HeaderButtons>
          ),
        })}
      />
      <HomeStack.Screen
        name="Create"
        component={CreateNoteScreen}
        options={({ route }): StackNavigationOptions => ({
          title: getText(language, route.name.toLowerCase()),
        })}
      />
      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ route }): StackNavigationOptions => ({
          title: getText(language, route.name.toLowerCase()),
        })}
      />
      <HomeStack.Screen
        name="Note"
        component={NoteScreen}
        options={({ route }): StackNavigationOptions => ({
          title: getText(language, route.name.toLowerCase()),
        })}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    color: THEME.textColor,
  },
});
