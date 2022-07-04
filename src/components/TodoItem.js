import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
