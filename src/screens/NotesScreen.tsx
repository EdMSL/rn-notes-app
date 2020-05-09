import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '$modules/user/actions';
import { getText } from '$utils/localisation';
import { NoteItem } from '$components/NoteItem';
import { getNotes } from '$modules/note/actions';
import { IAppState } from '$redux/store';
import { THEME } from '$constants/theme';
import { INote } from '$modules/note/reducer';

interface IProps {
  navigation: any,
  route: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const NotesScreen: React.FC<IProps> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const notes = useSelector((state: IAppState) => state.note.notes);
  const isNotesLoading = useSelector((state: IAppState) => state.note.isNotesLoading);

  const changeLanguage = useCallback(() => {
    dispatch(setLanguage('en'));
    navigation.setOptions({
      title: getText('en', route.name.toLowerCase()),
    });
  }, [dispatch, route, navigation]);

  const onItemPress = useCallback((id: string, title: string) => {
    navigation.navigate('Note', {
      itemId: id,
      otherParam: title,
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      {
        isNotesLoading
          ? (
            <ActivityIndicator color={THEME.mainColor} />
          )
          : (
            <React.Fragment>
              <FlatList
                data={notes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <NoteItem
                    note={item}
                    onClick={onItemPress}
                  />
                )}
              />
              <Button
                title={getText('ru', 'createNote')}
                onPress={() => navigation.navigate('Create')}
              />
            </React.Fragment>
          )
      }
      {/* <Button
        title="Go to Note"
        onPress={() => navigation.navigate('Note', {
          itemId: 1,
          otherParam: 'Parameter string',
        })}
      /> */}
      {/* <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('MyModal')}
      /> */}
      {/* <Button
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
