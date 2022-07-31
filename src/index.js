import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import './styles/colors.css';
import './styles/index.css';
import './styles/forms.css';

import App from './App';
import Home from './pages/home';
import Events from './pages/events/events';
import LearnLinux from './pages/learnLinux/learnLinux';
//import EscapeHunt from './pages/escapeHunt/escapeHunt';
import RescueTheTux from './pages/rescueTheTux/home.js';
// import UserForm from './pages/recruitment_2022/recruitment';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

