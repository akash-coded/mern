function TodoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  }

  if (!todos.length) {
    return (
      <div>
        <h1>Todo List</h1>

        <p>No todos left!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li
            onDoubleClick={() => handleToggleTodo(todo)}
            style={{
              textDecoration: todo.done ? "line-through" : "",
            }}
            key={todo.id}
          >
            {todo.text}
            <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      x
    </span>
  );
}

export default TodoList;
