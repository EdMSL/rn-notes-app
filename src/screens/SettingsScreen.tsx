import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '$redux/store';
import { availableSettings, allSettings } from '$constants/default';
import { SettingItem } from '$components/SettingItem';
import { changeSetting } from '$modules/user/actions';

interface IProps {
  navigation: any,
  route: any,
}

export const SettingsScreen: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const settings = useSelector((state: IAppState) => state.user);
  const language = useSelector((state: IAppState) => state.user.language.value);

  const onSettingChange = useCallback((value, settingName: string) => {
    dispatch(changeSetting(value, settingName));
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={availableSettings}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SettingItem
            language={language}
            name={item}
            setting={allSettings[item]}
            currentValue={settings[item].value}
            onChange={onSettingChange}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
});
