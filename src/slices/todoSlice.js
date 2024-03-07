import { createSlice } from "@reduxjs/toolkit"; //Iimport ang ceateSlice API gikan sa Redux Toolkit

//diri sa slice is naa diri ang state,reducers and imong action
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
