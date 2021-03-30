import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './polyfill';

document.body.style.margin = '0';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body
);
