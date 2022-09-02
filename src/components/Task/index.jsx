import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import './index.css';

export default function Task({ done, label, onToggleDone, onDeleted }) {
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
      <button type="button" className="icon icon-edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}

Task.defaultProps = {
  done: false,
  status: false,
};

Task.propTypes = {
  done: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
