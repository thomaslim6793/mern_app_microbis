// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import './main.css'; // Global styles
import './App.css';  // App-specific styles

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src="/logo.jpeg" alt="Company Logo" className="App-logo" />
          <h1>Welcome to Your Laboratory Assistant</h1>
        </header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;