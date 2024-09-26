// client/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'; // Import your global styles
import App from './App';

// Create the root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);