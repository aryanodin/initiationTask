import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Project 1", completed: true },
  { id: "todo-1", name: "Project 2", completed: false },
  { id: "todo-2", name: "Project 3", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));