import { useState, useEffect } from "react";

function CounterWithNameAndSideEffect({ user }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Hi ${user}, you clicked ${count} times`);
  }, [user, count]);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default CounterWithNameAndSideEffect;
