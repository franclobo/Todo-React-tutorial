import React from 'react';
import TodoList from './TodosList'

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development enviroment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy the live server",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
