import React, { useCallback } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { getText } from '$utils/localisation';

interface IProps {
  navigation: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const CreateNoteScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Create screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
