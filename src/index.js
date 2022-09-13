import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const todoApp = ReactDOM.createRoot(document.getElementById('todoapp'));
todoApp.render(<App />);
