import { useEffect, useRef, useState } from 'react';

import TopBar from './components/topBar/topBar';
import Dock from './components/dock/dock';

import SettingsDialog from './components/settingsDialog/settingsDialog';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
// import UserForm from './pages/recruitment_2022/recruitment';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import './styles/colors.css';
import './styles/index.css';
import './styles/forms.css';

import Home from './pages/home';
import Events from './pages/events/events';
import LearnLinux from './pages/learnLinux/learnLinux';
//import EscapeHunt from './pages/escapeHunt/escapeHunt';
import RescueTheTux from './pages/rescueTheTux/home.js';
// import UserForm from './pages/recruitment_2022/recruitment';

export default function App() {
  return (
    <div className="App">
      <RescueTheTux />
    </div>
  );
};

