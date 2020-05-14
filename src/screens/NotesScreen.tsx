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

import { getText } from '$utils/localisation';
import { NoteItem } from '$components/NoteItem';
import { getNotes, removeNote } from '$modules/note/actions';
import { IAppState } from '$redux/store';
import { THEME } from '$constants/theme';
import { getSettings } from '$modules/user/actions';

interface IProps {
  navigation: any,
  route: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const NotesScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getSettings());
  }, [dispatch]);

  const notes = useSelector((state: IAppState) => state.note.notes);
  const isNotesLoading = useSelector((state: IAppState) => state.note.isNotesLoading);
  const language = useSelector((state: IAppState) => state.user.language.value);

  const onItemPress = useCallback((id: number, title: string) => {
    navigation.navigate('Note', {
      itemId: id,
      otherParam: title,
    });
  }, [navigation]);

  const onItemLongPress = useCallback((id: number) => {
    dispatch(removeNote(id));
  }, [dispatch]);

  return (
    <View style={styles.main}>
      {
        isNotesLoading
          ? (
            <ActivityIndicator color={THEME.mainColor} />
          )
          : (
            <React.Fragment>
              {
                notes.length > 0
                  ? (
                    <FlatList
                      data={notes}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item }) => (
                        <NoteItem
                          note={item}
                          onClick={onItemPress}
                          onLongPress={onItemLongPress}
                        />
                      )}
                    />
                  )
                  : (
                    <Text>{getText(language, 'noNotes')}</Text>
                  )
              }
              <Button
                title={getText(language, 'createNote')}
                onPress={() => navigation.navigate('Create')}
              />
            </React.Fragment>
          )
      }
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
