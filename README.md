# week5-todolist-with-reducer

What changed from Week 4 to Week 5?

As mentioned in the Week 4 README, the application logic was moved from App.tsx to a custom hook located in /hooks/useTodos.ts.

useState from Week 4 was replaced with useReducer.

A delete todo feature was added.

## useState vs useReducer
-Week 4 – useState
User presses the + button
addTodo(text) runs
setTodos() creates and sets a new array

-Week 5 useReducer:
User presses the + button
addTodo(text) runs
dispatch({ type: 'ADD', payload: text }) is called
The reducer receives (state, action) and returns the next state


## Toogle Done & Undone
-Week 4:
User presses the checkbox
toggleTodo(id) runs
setTodos(todos.map(...)) updates the state

-Week5:
User presses the checkbox
toggleTodo(id) runs
dispatch({ type: 'TOGGLE', payload: id }) is called
The reducer handles the state update


UI Adjustment

The checkbox was moved to the left side of the task item to prevent accidental todo deletion and to improve usability.
