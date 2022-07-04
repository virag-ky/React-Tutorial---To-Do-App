import React, { Component } from 'react';

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

  render() {
    const { title } = this.state;
    return (
      <form>
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
export default InputTodo;
