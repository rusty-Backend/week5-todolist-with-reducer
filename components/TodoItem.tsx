import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type Props = {
  item: Todo;
  onToggle: () => void;
  onRemove: () => void;
};

export default function TodoItem({ item, onToggle, onRemove }: Props) {
  return (
<View style={styles.row}>
  <View style={styles.leftSection}>
    <Checkbox
      value={item.done}
      onValueChange={onToggle}
    />

    <Text
      style={[
        styles.text,
        item.done && styles.doneText
      ]}
    >
      {item.text}
    </Text>
  </View>

  <Pressable onPress={onRemove}>
    <Text style={styles.removeText}>✕</Text>
  </Pressable>
</View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1
  },
  text: {
    fontSize: 18,
    flex: 1
  },
  doneText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  removeText: {
    color: 'red',
    fontSize: 18
  }
});

