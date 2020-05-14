import React, { useCallback } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import { THEME } from '$constants/theme';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface IProps {
  option: {
    label: string,
    value: any,
  }
  currentValue: any,
  onChange: (value: any) => void,
}

export const SettingCheckboxItem: React.FunctionComponent<IProps> = ({
  option,
  currentValue,
  onChange,
}) => {
  const onCheckboxChange = useCallback(() => {
    onChange(option.value);
  }, [onChange, option]);

  return (
    <TouchableNativeFeedback
      style={styles.item}
      onPress={onCheckboxChange}
    >
      <Checkbox
        status={currentValue === option.value ? 'checked' : 'unchecked'}
        // onPress={onCheckboxChange}
      />
      <Text>{option.label}</Text>
      {
        currentValue === option.value && (<Text>Selected</Text>)
      }
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedItem: {
    backgroundColor: '#00ff55',
  },
  text: {
    color: THEME.mainColor,
  },
});
