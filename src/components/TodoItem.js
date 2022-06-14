import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button
        type="button"
        onClick={() => deleteTodoProps(todo.id)}
      >
        Delete
      </button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
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
