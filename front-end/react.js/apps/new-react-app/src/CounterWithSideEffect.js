import { useState, useEffect } from 'react';

function CounterWithSideEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times.`);
    }, [count]);

    return (
        <>
            You clicked {count} times.
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )

}

export default CounterWithSideEffect;