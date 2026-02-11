import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useTodos } from './hooks/useTodos';
import TodoItem from './components/TodoItem';
import TodoInputField from './components/TodoInputField';

export default function App() {
  const { todos, addTodo, toggleTodo } = useTodos();

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24 }}>Todo List</Text>

      <TodoInputField onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={() => toggleTodo(item.id)}
          />
        )}
      />
    </View>
  );
}
