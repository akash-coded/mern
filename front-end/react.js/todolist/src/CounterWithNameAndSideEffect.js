import "./App.css";
import React from "react";

const { useEffect, useState } = React;

function CounterWithNameAndSideEffect({ user }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Hi ${user}, you clicked ${count} times`);
  }, [user, count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterWithNameAndSideEffect;
