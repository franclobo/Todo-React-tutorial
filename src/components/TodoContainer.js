import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  render() {
    const { todos } = this.state;
    const handleChange = (id) => {
      this.setState({
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      });
    };

    const delTodo = (id) => {
      this.setState({
        todos: [
          ...todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
      });
    };

    const setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title: updatedTitle,
            };
          }
          return todo;
        }),
      });
    };

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
