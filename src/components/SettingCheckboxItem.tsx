import React, { useCallback } from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  CheckBox,
  StyleSheet,
} from 'react-native';

import { THEME } from '$constants/theme';

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
      <View style={styles.item}>
        <CheckBox
          value={currentValue === option.value}
        />
        <Text>{option.label}</Text>
      </View>
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
