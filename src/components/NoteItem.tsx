import React, { useCallback } from 'react';
import {
  View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet,
} from 'react-native';

import { THEME } from '$constants/theme';

interface IProps {
  id: string,
  title: string,
  onClick: (id: string, title: string) => void,
}

export const NoteItem: React.FunctionComponent<IProps> = ({
  id,
  title,
  onClick,
}) => {
  const onItemPress = useCallback(() => {
    onClick(id, title);
  }, [onClick, id, title]);

  return (
    <TouchableNativeFeedback
      // activeOpacity={0.7}
      onPress={onItemPress}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
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
  text: {
    color: THEME.mainColor,
  },
});
