import React, { useCallback } from 'react';
import {
  View, Text, Button, FlatList, StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { setLanguage } from '$modules/user/actions';
import { getText } from '$utils/localisation';
import { NOTES } from '$constants/mockNotes';
import { NoteItem } from '$components/NoteItem';

interface IProps {
  navigation: any,
  route: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const MainScreen: React.FC<IProps> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const changeLanguage = useCallback(() => {
    dispatch(setLanguage('en'));
    navigation.setOptions({
      title: getText('en', route.name.toLowerCase()),
    });
  }, [dispatch, route, navigation]);

  const onItemPress = useCallback(() => {

  }, []);

  return (
    <View style={styles.main}>
      <FlatList
        data={NOTES}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => (
          <NoteItem
            title={item.title}
            onClick={onItemPress}
          />
        )}
      />
      <Button
        title="Go to Note"
        onPress={() => navigation.navigate('Note', {
          itemId: 1,
          otherParam: 'Parameter string',
        })}
      />
      {/* <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('MyModal')}
      />
      <Button
        title="Change language"
        onPress={changeLanguage}
      /> */}
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
