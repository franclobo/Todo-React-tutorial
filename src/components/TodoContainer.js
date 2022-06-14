import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development enviroment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy the live server',
          completed: false,
        },
      ],
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

    return (
      <div>
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
