import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface IProps {
  navigation: any,
  route: any,
}

export const NoteScreen: React.FC<IProps> = ({ navigation, route }) => {
  const itemId = route.params?.itemId ?? '23';
  const { otherParam } = route?.params ?? 'Any text';

  return (
    <View style={styles.wrapper}>
      <Text>{`Note Screen ${itemId}`}</Text>
      <Text>{otherParam || 'text'}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Note')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
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
