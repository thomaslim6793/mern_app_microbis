import React from 'react';
import Header from '../Header/Header'; // Reusing the Header component
import styles from './Contact_us.module.css'; // Import the CSS module

const Contact_us = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Reuse the Header component */}
      <Header />
      
      {/* Contact Information Section */}
      <div className={styles.bodyWrapper}>
        <h2>Contact Us</h2>

        {/* Harry Akligoh */}
        <div className={styles.contactCard}>
          <h3>Harry Akligoh</h3>
          <p><strong>Role:</strong> PI, idea conceptualization, development of manuscript</p>
          <p><strong>Institution:</strong> Northeastern University, Boston, Duplex Bioscience LBG</p>
          <p><strong>Email:</strong> <a href="mailto:akligoh.h@northeastern.edu">akligoh.h@northeastern.edu</a></p>
        </div>

        {/* Charlie Huh */}
        <div className={styles.contactCard}>
          <h3>Charlie Huh</h3>
          <p><strong>Role:</strong> Idea conceptualization, manuscript development</p>
          <p><strong>Institution:</strong> Northeastern University, Boston</p>
          <p><strong>Email:</strong> <a href="mailto:charlie.huh.work@gmail.com">charlie.huh.work@gmail.com</a></p>
        </div>

        {/* Alexander Kwakye */}
        <div className={styles.contactCard}>
          <h3>Alexander Kwakye</h3>
          <p><strong>Role:</strong> Idea conceptualization, data analysis, manuscript development</p>
          <p><strong>Institution:</strong> Stony Brook University, New York</p>
          <p><strong>Email:</strong> <a href="mailto:Kwakyealex900@gmail.com">Kwakyealex900@gmail.com</a></p>
        </div>

        {/* Thomas Lim */}
        <div className={styles.contactCard}>
          <h3>Thomas Lim</h3>
          <p><strong>Role:</strong> Idea conceptualization, AI model development</p>
          <p><strong>Institution:</strong> Northeastern University, Boston</p>
          <p><strong>Email:</strong> <a href="mailto:thomaslim6793@gmail.com">thomaslim6793@gmail.com</a></p>
        </div>

      </div>
    </div>
  );
};

export default Contact_us;