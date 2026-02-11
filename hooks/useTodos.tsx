import { useReducer } from 'react';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'REMOVE'; payload: string };

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload,
          done: false
        }
      ];

    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

export function useTodos() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text: string) => {
    dispatch({ type: 'ADD', payload: text });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return { todos, addTodo, toggleTodo, removeTodo };
}
