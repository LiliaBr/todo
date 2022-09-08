import React, { Component } from 'react';

import './index.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header>
        <h1> todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            autoFocus
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}
