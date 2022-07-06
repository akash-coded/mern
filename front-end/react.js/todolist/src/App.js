import "./App.css";
import logo from "./logo.svg";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: true },
    { id: 3, text: "Take shower", done: false },
  ]);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"></img>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;

// display a h1 with "Hi", if the message is equal to "Hello",
// else print "Sorry, I'm busy." in h4 and red colour
