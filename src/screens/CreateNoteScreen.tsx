import React, { useCallback, useState } from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  Button,
  TextInput,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { getText } from '$utils/localisation';
import { THEME } from '$constants/theme';
import { createNote } from '$modules/note/actions';

interface IProps {
  navigation: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const CreateNoteScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');

  const onNoteInputChange = useCallback((value) => {
    setText(value);
  }, []);

  const onSaveNoteBtnClick = useCallback(() => {
    navigation.navigate('Notes');
    dispatch(createNote(text));
  }, [dispatch, navigation, text]);

  const onFreeSpaceClick = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={onFreeSpaceClick}>
        <View style={styles.main}>
          <Text style={styles.title}>{getText('ru', 'createNote')}</Text>
          <TextInput
            style={styles.textarea}
            placeholder={getText('ru', 'createNotePlaceholder')}
            value={text}
            onChangeText={onNoteInputChange}
            multiline
          />
          <Button
            title={getText('ru', 'createNoteBtn')}
            color={THEME.mainColor}
            onPress={onSaveNoteBtnClick}
            disabled={!text}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {

  },
  textarea: {
    padding: 4,
  },
});
