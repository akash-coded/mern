import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import CounterWithNameAndSideEffect from "./CounterWithNameAndSideEffect";
import SearchFilterDemo from "./SearchFilterDemo";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

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

      <Routes>
        <Route exact path="/" element={<Welcome user={"Akash"} />} />

        <Route exact path="/search" element={<SearchFilterDemo />} />

        <Route
          exact
          path="/counter"
          element={
            <>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </>
          }
        />

        <Route
          exact
          path="/counterWithNameAndSideEffect"
          element={<CounterWithNameAndSideEffect user={"Akash Das"} />}
        />

        <Route
          exact
          path="/todos"
          element={
            <>
              <TodoList todos={todos} setTodos={setTodos} />
              <AddTodo setTodos={setTodos} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
