import { useState, useEffect } from "react";

function FifthChildComponentWithUseEffect({ name }) {
    const [myState, setMyState] = useState(0);

    useEffect(() => {
        console.log(`Hi ${name}, you're in FifthChildComponentWithUseEffect`);
    }, [name]);

    useEffect(() => {
        console.log(`Hello, ${name}. The FifthChildComponentWithUseEffect did mount or update`);

        return () => {
            console.log(`Goodbye, ${name}. The FifthChildComponentWithUseEffect will unmount`);
        }
    }, [name]);

    return (
        <>
            <div>
                <h2>Fifth Child Component</h2>
                <p>State Variable Data from Parent: {name}</p>
                <p>myState: {myState}</p>
                <button onClick={() => setMyState(myState + 1)}>Increment myState</button>
            </div>
        </>
    );
}

export default FifthChildComponentWithUseEffect;