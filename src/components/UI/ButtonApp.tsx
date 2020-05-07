import React from 'react';
import { View, Button } from 'react-native';

interface IProps {
  title: string,
  onPress: () => void,
}

export const ButtonApp: React.FunctionComponent<IProps> = ({ title, onPress }) => {
  return (
    <View>
      <Button title={title}
        onPress={onPress}
      />
    </View>
  );
};
