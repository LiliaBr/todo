import React, { Component } from 'react';
import * as ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

import NewTaskForm from './components/NewTaskForm/index';
import TaskList from './components/TaskList/index';
import Footer from './components/Footer/index';

class App extends Component {
  maxId = 0;

  static propTypes = {
    todos: PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      done: PropTypes.bool,
      status: PropTypes.bool,
      id: PropTypes.number,
    }),
  };
  
  state = {
    todos: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ],
    filter: 'all',
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      status: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todos }) => {
      const newArr = [...todos, newItem];
      return { todos: newArr };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => this.toggleProperty(todos, id, 'done'));
  };

  onToggleStatus = (id) => {
    this.setState(({ todos }) => this.toggleProperty(todos, id, 'status'));
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex((el) => el.id === id);

      const newArr = todos.splice(index, 1);
      return newArr;
    });
  };

  onClearComleted = () => {
    this.setState(({ todos }) => {
      const items = todos.filter((item) => !item.done);
      console.log(items);
      return { todos: items };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((items) => !items.done);
      case 'done':
        return items.filter((items) => items.done);
      default:
        return items;
    }
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    const newArr = [...arr];
    newArr[index][propName] = !newArr[index][propName];

    return newArr;
  }

  render() {
    const { todos, filter } = this.state;

    const visibleItems = this.filter(todos, filter);

    const doneCount = this.state.todos.filter((el) => el.done).length;
    const todoCount = this.state.todos.length - doneCount;

    return (
      <div>
        <NewTaskForm addItem={this.addItem} />
        <TaskList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleStatus={this.onToggleStatus}
          onToggleDone={this.onToggleDone}
        />
        <Footer
          todos={visibleItems}
          todoCount={todoCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          onClearComleted={this.onClearComleted}
        />
      </div>
    );
  }
}

const todoApp = ReactDOM.createRoot(document.getElementById('todoapp'));
todoApp.render(<App />);
