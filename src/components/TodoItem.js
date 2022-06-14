import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handlechangeprops } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        handlechangeprops={handlechangeprops}
      />
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.object]),
  handlechangeprops: PropTypes.string,
};

TodoItem.defaultProps = {
  todo: {},
  handlechangeprops: '',
};

export default TodoItem;
