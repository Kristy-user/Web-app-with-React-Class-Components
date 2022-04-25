import React from 'react';
import ReactDom from 'react-dom';
import { App } from './Components/App/App';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
