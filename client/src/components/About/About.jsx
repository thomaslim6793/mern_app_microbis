import React from 'react';
import Header from '../Header/Header'; // Reusing the Header component
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Reuse the Header component */}
      <Header />
      
      {/* About page content */}
      <div className={styles.bodyWrapper}>
        <h2>About MicroBIS.io</h2>
        <p className={styles.description}>
          MicroBIS.io is a web-based laboratory assistant that performs three main functions:
        </p>
        <ul className={styles.featureList}>
          <li>Bacteria identification</li>
          <li>Antibiotics resistance pattern determination</li>
          <li>Laboratory data management</li>
        </ul>
        <p className={styles.description}>
          These features are designed to help scientists and diagnosticians working in hospitals and research laboratories manage microbiological and antibiotics test data efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;