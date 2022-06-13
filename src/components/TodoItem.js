import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;
  return <li>{todo.title}</li>;
}

TodoItem.propTypes = {
  todo: PropTypes.string,
};

TodoItem.defaultProps = {
  todo: '',
};

export default TodoItem;
