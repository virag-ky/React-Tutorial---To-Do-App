/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem({ todo, handleChangeProps }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      {todo.title}
    </div>
  );
}

export default TodoItem;
