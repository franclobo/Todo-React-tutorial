import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handleChangeProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.object]),
  handleChangeProps: PropTypes.oneOfType([PropTypes.func]),
};

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: '',
};

export default TodoItem;
