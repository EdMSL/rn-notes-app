import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface IProps {
  navigation: any,
  route: any,
}

export const ModalScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>This is a modal!</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Dismiss"
      />
    </View>
  );
};

const styles = StyleSheet.create({main: { flex: 1, alignItems: 'center', justifyContent: 'center' }});
