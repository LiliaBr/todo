import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import './index.css';

export default function Task({ status, label, onToggleDone, onDeleted }) {
  const [sec, setSeconds] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setSeconds((sec) => sec + 1);
      }, 1000);
    } else if (!timer && sec != 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  function toggleTimer(e) {
    for (const btnClass of ['play', 'paused']) {
      e.target.classList.toggle(btnClass);
      setTimer(!timer);
    }
  }

  function timerFormat() {
    let m = Math.floor(sec / 60),
      s = sec % 60;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    return `${m}:${s}`;
  }

  return (
    <div className="view">
      <input className="toggle" checked={status} type="checkbox" onChange={onToggleDone} />
      <label>
        <span className="title">{label}</span>
        <span className="description">created {formatDistanceToNowStrict(new Date())} ago</span>
        <span className="timer">
          <button className="icon-button play" onClick={(e) => toggleTimer(e)}></button>
          <span>{timerFormat()}`s</span>
        </span>
      </label>
      <button type="button" className="icon icon-edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}

Task.defaultProps = {
  status: false,
};

Task.propTypes = {
  status: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
