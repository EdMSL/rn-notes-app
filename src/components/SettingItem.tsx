import React, { useCallback } from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

import { THEME } from '$constants/theme';
import { IDefaultSetting } from '$constants/default';
import { SettingCheckboxItem } from '$components/SettingCheckboxItem';
import { getText } from '$utils/localisation';
import { ILanguage } from '$constants/language';

interface IProps {
  language: ILanguage,
  name: string,
  setting: IDefaultSetting,
  currentValue: any,
  onChange: (value: any, setting: string) => void,
}

export const SettingItem: React.FunctionComponent<IProps> = ({
  language,
  name,
  setting,
  currentValue,
  onChange,
}) => {
  const onCheckboxInputChange = useCallback((value) => {
    onChange(value, name);
  }, [onChange, name]);

  return (
    <View style={styles.item}>
      <View>
        <Text>{getText(language, setting.title)}</Text>
      </View>
      <View>
        {
          setting.type === 'checkbox' && (
            <FlatList
              data={setting.options?.map((option) => option)}
              keyExtractor={(item) => item.label}
              renderItem={({ item }) => (
                <SettingCheckboxItem
                  option={item}
                  currentValue={currentValue}
                  onChange={onCheckboxInputChange}
                />
              )}
            />
          )
        }
      </View>
    </View>
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
