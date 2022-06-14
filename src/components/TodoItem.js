import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button
        type="button"
        onClick={() => deleteTodoProps(todo.id)}
      >
        Delete
      </button>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.object]),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: '',
  deleteTodoProps: '',
};

export default TodoItem;
