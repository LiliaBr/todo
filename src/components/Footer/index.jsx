import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../TasksFilter/index';
import './index.css';

export default function Footer({ id, todoCount, filter, onFilterChange, onClearComleted }) {
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

Footer.defaultProps = {
  todoCount: 0,
};

Footer.propTypes = {
  todoCount: PropTypes.number,
  id: PropTypes.number,
  onFilterChange: PropTypes.func,
  onClearComleted: PropTypes.func,
  filter: PropTypes.string,
};
