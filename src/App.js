import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./slices/todoSlice";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editedTodo) {
      const newTodo = {
        id: uuidv4(),
        text: todo,
        completed: false,
      };

      dispatch(addTodo(newTodo));
      setTodo("");
    } else {
      dispatch(editTodo({ id: editedTodo.id, text: todo }));
      setEditedTodo("");
      setTodo("");
    }
  };

  const removeHandler = (t) => {
    dispatch(removeTodo(t));
  };

  const editHandler = (t) => {
    setTodo(t.text);
    setEditedTodo(t);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Todolist</h2>
        <form className="Todoform" onSubmit={handleSubmit}>
          <div className="li-todo">
          <input
            placeholder="What todo"
            className="todo-btn"
            value={todo || ""}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="todo-btn">
            {editedTodo ? "UPDATE" : "ADD"}
          </button>
          </div >
          <ul className="show-todo">
            {todos &&
              todos.map((t) => (
                <li className="li-todo" key={t.id}>
                  <input className="todo-btn" value={t.text} readOnly />
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => editHandler(t)}
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => removeHandler(t)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
