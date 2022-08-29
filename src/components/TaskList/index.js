import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/index';
import './index.css';

export default class TaskList extends Component {
  static propTypes = {
    onToggleDone: PropTypes.func,
    onToggleStatus: PropTypes.func,
    onDeleted: PropTypes.func,
  };
  render() {
    const { onDeleted, onToggleStatus, onToggleDone } = this.props;

    const elements = this.props.todos.map((item) => {
      const { id, ...props } = item;
      let classNames = '';

      if (item.done) {
        classNames += 'completed';
      }
      if (item.status) {
        classNames += 'editing';
      }

      return (
        <li key={id} className={classNames}>
          <Task
            onToggleDone={() => onToggleDone(id)}
            onToggleStatus={() => onToggleStatus(id)}
            onDeleted={() => onDeleted(id)}
            {...props}
          />
          <input type="text" className="edit" label={this.props.label}></input>
        </li>
      );
    });

    return (
      <section className="main">
        <ul className="todo-list">{elements}</ul>
      </section>
    );
  }
}
