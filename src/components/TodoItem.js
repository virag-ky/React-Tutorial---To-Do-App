import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

function TodoItem({
  todo,
  handleChangeProps,
  deleteTodoProps,
  handleEditing,
  viewMode,
  editMode,
  setUpdate,
  handleUpdatedDone,
}) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          <FaTrash />
        </button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={todo.title}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
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
  setUpdate: PropTypes.func.isRequired,
  handleUpdatedDone: PropTypes.func.isRequired,
};

export default TodoItem;
