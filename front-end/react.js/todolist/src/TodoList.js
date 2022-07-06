function TodoList({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li
            style={{
              textDecoration: todo.done ? "line-through" : "",
            }}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
