import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func.isRequired,
};

TodosList.defaultProps = {
  handleChangeProps: '',
  deleteTodoProps: '',
};

export default TodosList;
