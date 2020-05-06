import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface IProps {
  navigation: any,
}

export interface IRouteProps {
  itemId: number,
  otherParam: string,
}

export const MainScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Hello world!</Text>
      <Button
        title="Go to Note"
        onPress={() => navigation.navigate('Notes', {
          itemId: 1,
          otherParam: 'Parameter string',
        })}
      />
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('MyModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
