import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = this.props;
    const { title } = this.state;
    addTodoProps(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
        />
        <button type="button">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = { addTodoProps: PropTypes.func.isRequired };

export default InputTodo;
