import React from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

interface IProps {
  navigation: any,
  route: any,
}

export const SettingsScreen: React.FC<IProps> = ({ navigation, route }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Settings screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
});
