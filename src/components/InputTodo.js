import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  }

  render() {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodoProps(title);
      this.setState({
        title: '',
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoProps: '',
};

export default InputTodo;
