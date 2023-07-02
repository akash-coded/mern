function SecondChildComponentWithProp({ myProp }) {
    let messageEnding = "!!!";

    return (
        <>
            <h2>Second Child Component With Prop</h2>
            <p>
                Prop Data: {myProp}{messageEnding}
            </p>
        </>
    );
}

export default SecondChildComponentWithProp;