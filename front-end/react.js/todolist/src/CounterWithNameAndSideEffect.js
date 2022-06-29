import "./App.css";
import { useState, useEffect } from "react";

function CounterWithNameAndSideEffect({ user }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Hi ${user}, you clicked ${count} times`);
  }, [user, count]);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterWithNameAndSideEffect;
