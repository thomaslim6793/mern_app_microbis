// client/src/components/Home/Home.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import LoginForm from '../LoginForm/LoginForm';   // Import the LoginForm component
import Modal from '../Modal/Modal';              // Import the Modal component
import ImageSlider from '../ImageSlider/ImageSlider';

function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsLoginModalOpen(true); // Open the modal when "Sign In" is clicked
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false); // Close the modal
  };

  const handleContinueAsGuest = () => {
    navigate('/dashboard'); // Navigate to the dashboard or another appropriate route
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <img src="/MicroBIS_UI_Final_designs/logo/SVG/Logo 02.svg" alt="Microbis Logo" className={styles.logo} />
          </div>
          
          <nav className={styles.navMenu}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Contact us</a>
            <button className={styles.signInButton} onClick={handleSignIn}>
              Sign In
            </button>
            <button className={styles.guestButton} onClick={handleContinueAsGuest}>
              Continue as Guest
            </button>
          </nav>
        </header>
      </div>
      {/* Body wrapper where the ImageSlider will be placed */}
      <div className={styles.bodyWrapper}>
          <div className={styles.imageSliderContainer}>
            <ImageSlider />
          </div>
          <div className={styles.infoContainer}>
            <h2 style={{ fontSize: '32px' }}>An AI powered lab assistant</h2>
            <img src="/about/Vilvli AMR challenge figure 1.png" className={styles.image} />
          </div>
      </div>
      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
        <LoginForm />
      </Modal>
    </div>
  );
}

export default Home;