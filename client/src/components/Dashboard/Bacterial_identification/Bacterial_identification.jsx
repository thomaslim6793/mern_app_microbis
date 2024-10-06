// client/src/components/Dashboard/Bacterial_identification/Bacterial_identification.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bacterial_identification.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Bacterial_identification = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handlers for button clicks
  const handle8PanelTest = () => {
    navigate('/dashboard/bacterial-identification/8-panel-test'); // Navigate to the 8-Panel Test route
  };

  const handle20PanelTest = () => {
    navigate('/dashboard/bacterial-identification/20-panel-test'); // Navigate to the 20-Panel Test route (you will implement this later)
  };

  return (
    <div className={styles.bacterialIdentificationContainer}>
      {/* Sidebar remains consistent */}
      <Sidebar />

      {/* Main content */}
      <main className={styles.mainContent}>
        <h2>Select a Test Panel</h2>
        <div className={styles.buttonGrid}>
          <button className={styles.testButton} onClick={handle8PanelTest}>
            8-Panel Test
          </button>
          <button className={styles.testButton} onClick={handle20PanelTest}>
            20-Panel Test
          </button>
        </div>
      </main>
    </div>
  );
};

export default Bacterial_identification;