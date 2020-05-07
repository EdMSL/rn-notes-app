import React from 'react';
import { createStackNavigator, StackHeaderProps, StackNavigationOptions } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Alert, StyleSheet } from 'react-native';

import { THEME } from '$constants/theme';
import { getText } from '$utils/localisation';
import { MainScreen } from '$screens/MainScreen';
import { NoteScreen } from '$screens/NoteScreen';
import { CreateNoteScreen } from '$screens/CreateNoteScreen';
import { SettingsScreen } from '$screens/SettingsScreen';
import { HeaderButtonApp } from '$components/UI/HeaderButtonApp';

const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = ({ navigation }: StackHeaderProps) => (
  <HomeStack.Navigator
    initialRouteName="Notes"
    screenOptions={{
      headerStyle: {
        backgroundColor: THEME.mainColor,
      },
      headerTintColor: THEME.textColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
    }}
  >
    <HomeStack.Screen
      name="Notes"
      component={MainScreen}
      options={({ route }): StackNavigationOptions => ({
        title: getText('ru', route.name.toLowerCase()),
      })}
    />
    <HomeStack.Screen
      name="Note"
      component={NoteScreen}
      options={({ route }): StackNavigationOptions => ({
        title: getText('ru', route.name.toLowerCase()),
      })}
    />
    <HomeStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ route }): StackNavigationOptions => ({
        title: getText('ru', route.name.toLowerCase()),
      })}
    />
  </HomeStack.Navigator>
);

const CreateNoteStack = createStackNavigator();

const CreateNoteNavigator = ({ navigation }: StackHeaderProps) => (
  <CreateNoteStack.Navigator
    initialRouteName="Notes"
    screenOptions={{
      headerStyle: {
        backgroundColor: THEME.mainColor,
      },
      headerTintColor: THEME.textColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
    }}
  >
    <CreateNoteStack.Screen
      name="Create"
      component={CreateNoteScreen}
      options={({ route }): StackNavigationOptions => ({
        title: getText('ru', route.name.toLowerCase()),
      })}
    />
  </CreateNoteStack.Navigator>
);

// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="CreateNote"
//       component={CreateNoteScreen}
//       options={{
//         tabBarLabel: 'Create',
//         tabBarIcon: ({ color }) => (
//           <MaterialIcons
//             name="list"
//             color="fff"
//             size={26}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

export const MainNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notes"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: () => (
            <MaterialIcons
              name="list"
              color="#fff"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreateNote"
        component={CreateNoteNavigator}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="add"
              color="#fff"
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // <Stack.Navigator
    //   initialRouteName="Home"
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: THEME.mainColor,
    //     },
    //     headerTintColor: THEME.textColor,
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}
    // >
    //   <Stack.Screen
    //     name="Home"
    //     component={MainScreen}
    //     options={{
    //       title: getText('ru', 'notes'),
    //     }}
    //   />
    //   <Stack.Screen
    //     name="Notes"
    //     component={NoteScreen}
    //     options={({ route }) => ({
    //       title: route.name,
    //       // title: route.params?.name,
    //     })}
    //   />
    //   <Stack.Screen
    //     name="CreateNote"
    //     component={TabNavigator}
    //     options={({ route }) => ({
    //       title: route.name,
    //       // title: route.params?.name,
    //     })}
    //   />
    // </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    color: THEME.textColor,
  },
});
