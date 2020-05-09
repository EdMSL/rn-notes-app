import React, { useCallback } from 'react';
import {
  View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet,
} from 'react-native';

import { THEME } from '$constants/theme';
import { INote } from '$modules/note/reducer';

interface IProps {
  note: INote,
  onClick: (id: number, title: string) => void,
  onLongPress: (id: number) => void,
}

export const NoteItem: React.FunctionComponent<IProps> = ({
  note,
  onClick,
  onLongPress,
}) => {
  const onItemPress = useCallback(() => {
    onClick(note.id, note.title);
  }, [onClick, note]);

  const onItemLongPress = useCallback(() => {
    onLongPress(note.id);
  }, [onLongPress, note]);

  return (
    <TouchableNativeFeedback
      // activeOpacity={0.7}
      onPress={onItemPress}
      onLongPress={onItemLongPress}
    >
      <View style={{ ...styles.item, ...(note.isComplited ? styles.completedItem : {}) }}>
        <Text style={styles.text}>{note.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  completedItem: {
    backgroundColor: '#00ff55',
  },
  text: {
    color: THEME.mainColor,
  },
});
