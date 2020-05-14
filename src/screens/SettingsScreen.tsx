import React, { useCallback } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Settings,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IUserRootState } from '$modules/user/reducer';
import { IAppState } from '$redux/store';
import { availableSettings, allSettings } from '$constants/default';
import { SettingItem } from '$components/SettingItem';
import { changeSetting } from '$modules/user/actions';

interface IProps {
  navigation: any,
  route: any,
}

export const SettingsScreen: React.FC<IProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const settings = useSelector((state: IAppState) => state.user);
  // const settingsArr = Object.keys(settings).filter((settingKey) => availableSettings.includes(settingKey)).map((setting) => ({
  //   id: settings[setting].id,
  //   title: setting,
  //   value: settings[setting].value,
  // }));

  const onSettingChange = useCallback((value, settingName: string) => {
    // console.log('change', value);
    dispatch(changeSetting(value, settingName));
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={availableSettings}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SettingItem
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
