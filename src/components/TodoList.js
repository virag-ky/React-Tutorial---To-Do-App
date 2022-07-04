/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleChangeProps }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
        />
      ))}
    </ul>
  );
}

export default TodoList;
