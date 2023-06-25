function FourthChildComponentWithStateAndSideEffect({ name, setName }) {
    return (
        <div>
            <h2>Fourth Child Component</h2>
            <p>State Variable Data from Parent: {name}</p>
            <button onClick={() => setName("Akash Das")}>Change Name</button>
            <button onClick={() => setName("Akash")}>Reset Name</button>
        </div>
    )
};

export default FourthChildComponentWithStateAndSideEffect;