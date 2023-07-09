import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';

function TodoList() {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span className={todo.completed ? 'completed' : null}>{todo.text}</span>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;