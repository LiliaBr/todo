import React from 'react';

import './index.css';

export default function NewTaskForm({ value, handleInputChange }) {
  return (
    <input
      className="new-todo"
      type="text"
      placeholder="What needs to be done?"
      onChange={handleInputChange}
      autoFocus
      value={value}
    />
  );
}
