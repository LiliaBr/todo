import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../TasksFilter/index';
import './index.css';

export default class Footer extends Component {
  static propTypes = {
    todoCount: PropTypes.number,
    id: PropTypes.number,
    onFilterChange: PropTypes.func,
    onClearComleted: PropTypes.func,
    filter: PropTypes.string,
  }

  render() {
    const { id, todoCount, filter, onFilterChange, onClearComleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={() => onClearComleted(id)}>
          Clear completed
        </button>
      </footer>
    );
  }
}
