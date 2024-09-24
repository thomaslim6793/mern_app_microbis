// client/src/components/Register.js

import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Add additional fields as needed
  
  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Registering with:', username, password);
  };

  return (
    <div className="register-container">
      <h2>Create a New Account</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Add more input fields as necessary */}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;