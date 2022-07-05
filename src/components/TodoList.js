import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({
  todos,
  handleChangeProps,
  deleteTodoProps,
  handleEditing,
  viewMode,
  editMode,
  setUpdate,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          handleEditing={handleEditing}
          viewMode={viewMode}
          editMode={editMode}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
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
};

export default TodoList;
