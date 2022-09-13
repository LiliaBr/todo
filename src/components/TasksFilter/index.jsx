import React from 'react';

import './index.css';

export default function TaskFilter({ filtered, setFiltered }) {
  let button = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Completed' },
  ];

  const btn = button.map(({ name, label }) => {
    const isActive = filtered === name;
    const styleName = isActive ? 'selected' : '';

    return (
      <li key={name} onClick={() => setFiltered(name)}>
        <button type="button" className={`${styleName}`}>
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{btn}</ul>;
}
