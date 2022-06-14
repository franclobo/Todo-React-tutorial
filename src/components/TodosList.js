import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, handleChangeProps, deleteTodoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

TodoList.defaultProps = {
  handleChangeProps: '',
  deleteTodoProps: '',
};

export default TodoList;
