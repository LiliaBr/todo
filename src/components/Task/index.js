import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import './index.css';

export default class Task extends Component {
  static defaultProps = {
    done: false,
  };

  static propTypes = {
    done: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const { done, label, onToggleDone, onToggleStatus, onDeleted } = this.props;

    return (
      <div className="view">
        <input className="toggle" checked={done} type="checkbox" onChange={onToggleDone} />
        <label>
          <span className="description" onClick={onToggleDone}>
            {label}
          </span>
          <span className="created">
            created
            {formatDistanceToNowStrict(new Date())}
            ago
          </span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onToggleStatus} />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}
