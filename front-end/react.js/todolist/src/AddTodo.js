import { useRef } from "react";

function AddTodo({ setTodos }) {
  const inputRef = useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(inputRef.current);
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text: text,
      done: false,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
