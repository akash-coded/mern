import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './TodoList';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const text = event.target.elements.todo.value;
    dispatch(addTodo(text));
    event.target.reset();
  }

  return (
    <div className='centeredContainer'>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder='Add todo' />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
