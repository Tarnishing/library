import "./App.css";
import { useState } from "react";
import LibraryForm from "./LibraryForm";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (index) =>
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, complete: !todo.complete } : todo
      )
    );

  return (
    <div className="Container">
      <div className="App">
        <div className="rgb-border">
          {" "}
          <button className="btn" onClick={() => setTodos([])}>
            RESET
          </button>
        </div>{" "}
        <LibraryForm
          onSubmit={(task) => setTodos([{ task, complete: false }, ...todos])}
        />
      </div>
      <div className="taskList">
        {todos.map(({ task, complete }, i) => (
          <div
            className="task"
            key={task}
            onClick={() => toggleComplete(i)}
            style={{ textDecoration: complete ? "line-through" : "" }}
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
