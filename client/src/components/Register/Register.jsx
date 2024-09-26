// client/src/components/Register/Register.js

import React, { useState } from 'react';
import styles from './Register.module.css'; // Import the CSS Module

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
    <div className={styles.registerContainer}>
      <h2>Create a New Account</h2>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          className={styles.inputField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Add more input fields as necessary */}
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;