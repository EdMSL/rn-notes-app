import React from 'react';
import { View, Button } from 'react-native';

interface IProps {
  onPress: () => void,
}

export const ButtonApp: React.FunctionComponent<IProps> = ({ onPress }) => {
  return (
    <View>
      <Button title="Press" onPress={onPress}/>
    </View>
  );
};
