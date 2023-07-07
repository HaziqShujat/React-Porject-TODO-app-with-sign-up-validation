import React from "react";
import "./TOdoapp.css";
import { useState } from "react";

function ToDoapp() {
  const [value, setValue] = useState("");
  const [todos, SetnewTodos] = useState([]);

  const valueget = (e) => {
    setValue(e.target.value);
  };

  function handlesubmit(e) {
    e.preventDefault();

    if (value.trim() !== "") {
      SetnewTodos([...todos, value]);
    }
    setValue("");
  }
  return (
    <div className="todo-app-container">
      <form onSubmit={handlesubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={valueget}
          placeholder="Enter a new todo"
        />
        <button id="signUpButton">Add Tasks</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoapp;
