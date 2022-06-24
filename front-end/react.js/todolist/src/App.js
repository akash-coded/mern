import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"></img>
      <h1>Todo List</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

// display a h1 with "Hi", if the message is equal to "Hello",
// else print "Sorry, I'm busy." in h4 and red colour
