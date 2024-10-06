// client/src/components/Dashboard/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleBacterialIdentification = () => {
    navigate('/dashboard/bacterial-identification'); // Navigate to the Bacterial Identification route
  };

  const handleAMRDetection = () => {
    navigate('/dashboard/AMR-tests');
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content area */}
      <main className={styles.mainContent}>
        <h1 className={styles.mainHeading}>Dashboard</h1>
        <div className={styles.buttonGrid}>
          <button className={styles.gridButton} onClick={handleBacterialIdentification}>
            Bacterial Identification
          </button>
          <button className={styles.gridButton} onClick={handleAMRDetection}>
            AMR Detection
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;