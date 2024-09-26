// client/src/components/LoginForm/LoginForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password, 'Remember Me:', rememberMe);
  };

  const handleCreateAccount = () => {
    navigate('/register'); // Redirect to the /register route
  };

  const handleContinueAsGuest = () => {
    console.log('Continue as Guest');
    // Logic to continue as a guest
  };

  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
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
      
      <div className={styles.rememberForgotContainer}>
        <label className={styles.rememberMe}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
        <a href="#" className={styles.forgotPassword}>
          Forgot your password?
        </a>
      </div>

      <button type="submit" className={styles.submitButton}>
        Login
      </button>
      <div className={styles.orText}>Or</div>

      {/* Create a new account section */}
      <button type="button" className={styles.createAccountButton} onClick={handleCreateAccount}>
        Create a New Account
      </button>
      {/* Continue as guest button */}
      <button type="button" className={styles.guestButton} onClick={handleContinueAsGuest}>
        Continue as Guest
      </button>
    </form>
  );
};

export default LoginForm;