import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../TasksFilter/index';
import './index.css';

export default function Footer({ todoCount, filtered, setFiltered, onClearComleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <Filter filtered={filtered} setFiltered={setFiltered} />
      <button className="clear-completed" onClick={() => onClearComleted()}>
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
  onClearComleted: PropTypes.func,
  filter: PropTypes.string,
};
