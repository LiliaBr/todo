import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class TaskFilter extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
  };

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Completed' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const styleName = isActive ? 'selected' : '';

      return (
        <li key={name} onClick={() => onFilterChange(name)}>
          <button type="button" className={`${styleName}`}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}
