# week5-todolist-with-reducer

What changed from week 4 to week 5?
-As I suggested in week4 readme, actual logic was moved from App.tsx to /hooks/useTodo.tsx.
-Week4 useState is now replaced with useReducer.

## useState vs useReducer
Week 4 useState:
-User presses + button
-addTodo(text) runs
-setTodos() creates a new array

Week 5 useReducer:
-User presses + button
-addTodo(text) runs
-Calls dispatch({ type: 'ADD', payload: text })
-Reducer receives (state, action) and returns the next state


## Toogle Done & Undone
Week 4:
-User presses Checkbox
-toggleTodo(id) runs
-setTodos(todos.map()) updates

Week5:
-User presses Checkbox
-toggleTodo(id) runs
-dispatch({ type: 'TOGGLE', payload: id })
-Reducer handles the update
