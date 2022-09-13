import React, { useState } from 'react';

import NewTaskForm from './components/NewTaskForm/index';
import TaskList from './components/TaskList/index';
import Footer from './components/Footer/index';

export default function App() {
  const [todos, updateTodos] = useState([
    { id: 0, label: 'Вывезти учебу', status: false },
    { id: 1, label: 'Не сдохнуть', status: false },
    { id: 2, label: 'Не рыдать!', status: false },
  ]);

  const [NewTaskForm_value, NewTaskForm_setValue] = useState('');
  const [filtered, setFiltered] = useState('all');

  let maxId = todos.length;

  function createItem(e) {
    e.preventDefault();
    const newTask = {
      id: maxId++,
      label: NewTaskForm_value,
      status: false,
    };
    updateTodos([...todos, newTask]);
    NewTaskForm_setValue('');
  }

  function handleInputChange(e) {
    NewTaskForm_setValue(e.target.value);
  }

  const onToggleDone = (id) => {
    const item = todos.find((el) => el.id === id);
    item.status = !item.status;
    updateTodos([...todos]);
  };

  function deleteItem(id) {
    const changeData = todos.filter((item) => item.id != id);
    updateTodos(changeData);
  }

  function onClearComleted() {
    const newTodos = todos.filter((item) => item.status != true);
    updateTodos(newTodos);
  }

  const statusCount = todos.filter((el) => el.status).length;
  const todoCount = todos.length - statusCount;

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={(e) => createItem(e)}>
          <NewTaskForm value={NewTaskForm_value} handleInputChange={(e) => handleInputChange(e)} />
        </form>
      </header>
      <TaskList todos={todos} onDeleted={(id) => deleteItem(id)} onToggleDone={onToggleDone} filtered={filtered} />
      <Footer
        todos={todos}
        todoCount={todoCount}
        filtered={filtered}
        setFiltered={setFiltered}
        onClearComleted={onClearComleted}
      />
    </div>
  );
}
