import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonApp } from '$components/UI/ButtonApp';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app now!</Text>
      <ButtonApp onPress={() => console.log()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
