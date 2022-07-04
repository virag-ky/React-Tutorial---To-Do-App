import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({
  todo,
  handleChangeProps,
  deleteTodoProps,
  handleEditing,
  viewMode,
  editMode,
}) {
  return (
    <li className="todo-item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
      </div>
      <input type="text" style={editMode} />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
  viewMode: PropTypes.shape({
    display: PropTypes.string,
  }).isRequired,
  editMode: PropTypes.shape({
    display: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
