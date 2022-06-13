import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
};

TodoList.defaultProps = {
  todos: '',
};

export default TodoList;
