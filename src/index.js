import React from 'react';
import ReactDOM from 'react-dom/client';
// React-router.
import { BrowserRouter as Router } from 'react-router-dom';
// Component file.
import TodoContainer from './components/TodoContainer';
// stylessheet.
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
