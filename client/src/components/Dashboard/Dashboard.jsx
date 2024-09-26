// client/src/components/Dashboard/Dashboard.js

import React from 'react';
import styles from './Dashboard.module.css'; // Import the CSS Module

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.heading}>Welcome to Your Dashboard</h1>
      <p className={styles.description}>
        This is where your laboratory assistant functionalities will reside.
      </p>
      {/* Add more features and components as needed */}
    </div>
  );
}

export default Dashboard;