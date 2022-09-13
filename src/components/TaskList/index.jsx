import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/index';
import './index.css';

export default function TaskList({ todos, onDeleted, onToggleDone, onToggleTimer, filtered }) {
  const [localTodos, setlocalTodos] = useState(todos);

  const filter = (status) => {
    const changedTodos = todos.filter((el) => el.status === status);
    setlocalTodos(changedTodos);
  };

  useEffect(() => {
    if (filtered === 'active') {
      filter(false);
    }
    if (filtered === 'done') {
      filter(true);
    }
    if (filtered === 'all') {
      setlocalTodos(todos);
    }
  }, [filtered, todos]);

  const elements = localTodos.map((item) => {
    let classNames = '';

    if (item.status) {
      classNames += 'completed';
    }

    return (
      <li key={item.id} className={classNames}>
        <Task
          label={item.label}
          status={item.status}
          onToggleDone={() => onToggleDone(item.id)}
          onDeleted={() => onDeleted(item.id)}
          onToggleTimer={() => onToggleTimer(item.id)}
        />
        <input type="text" className="edit" label={item.label} />
      </li>
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
}
TaskList.defaultProps = {
  todos: [],
};

TaskList.propTypes = {
  todos: PropTypes.array,
};
