// client/src/components/Home.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Logging in with:', username, password);
    // On successful login, navigate to dashboard
    navigate('/dashboard');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleContinueAsGuest = () => {
    navigate('/dashboard'); // Or another appropriate route
  };

  return (
    <div className="home-container">
      <img src="/logo.png" alt="Website Logo" className="logo" />
      <h1 className="main-heading">Your Laboratory Assistant</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="username" className="visually-hidden">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password" className="visually-hidden">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="additional-options">
        <button className="create-account-button" onClick={handleCreateAccount}>
          Create a New Account
        </button>
        <button className="guest-button" onClick={handleContinueAsGuest}>
          Continue as a Guest
        </button>
      </div>
    </div>
  );
}

export default Home;