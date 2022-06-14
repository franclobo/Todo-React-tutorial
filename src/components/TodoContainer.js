import React from 'react';
import TodoList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development enviroment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
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
    return (
      <div>
        <Header />
        <TodoList todos={todos} handleChangeProps={handleChange} />
      </div>
    );
  }
}

export default TodoContainer;
