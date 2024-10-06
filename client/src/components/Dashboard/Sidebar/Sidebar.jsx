import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleDashboardHome = () => {
    navigate('/dashboard'); // Navigate to the Dashboard route
  };

  const handleLogout = () => {
    navigate('/'); // Navigate back to the homepage when logout is clicked
  };

  return (
    <aside className={styles.sidebar}>
      <button className={styles.sidebarButton} onClick={handleBack}>
        Back
      </button>
      <div className={styles.centerContainer}>
        <button className={styles.sidebarButton} onClick={handleDashboardHome}>
          Dashboard Home
        </button>
        <button className={styles.sidebarButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;