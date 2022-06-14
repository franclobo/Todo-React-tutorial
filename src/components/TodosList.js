import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, handleChangeProps } = props;
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

TodoList.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array]).isRequired,
  handleChangeProps: PropTypes.oneOfType([PropTypes.func]),
};

TodoList.defaultProps = {
  handleChangeProps: '',
};

export default TodoList;
