import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from '../Modal/Modal'; // Import Modal component
import LoginForm from '../LoginForm/LoginForm'; // Import LoginForm component

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsLoginModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false); // Close the modal
  };

  const handleContinueAsGuest = () => {
    navigate('/dashboard'); // Navigate to the dashboard or another appropriate route
  };

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Logo */}
          <img src="/MicroBIS_UI_Final_designs/logo/SVG/Logo 02.svg" alt="Microbis Logo" className={styles.logo} />
          {/* Text 'Demo' next to the logo */}
          <span className={styles.demoText}> Demo</span>
        </div>
        
        <nav className={styles.navMenu}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact-us" className={styles.navLink}>Contact us</Link>
          <button className={styles.signInButton} onClick={handleSignIn}>
            Sign In
          </button>
          <button className={styles.guestButton} onClick={handleContinueAsGuest}>
            Continue as Guest
          </button>
        </nav>
      </header>

      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
        <LoginForm />
      </Modal>
    </div>
  );
};

export default Header;