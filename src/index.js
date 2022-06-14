import React from 'react';
import ReactDOM from 'react-dom/client';
// Component file.
import TodoContainer from './components/TodoContainer';

// stylessheet.
import './App.css';

// React-router.
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
