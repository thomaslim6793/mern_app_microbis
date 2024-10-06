import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AMR_tests.module.css';
import Sidebar from '../Sidebar/Sidebar';

const AMR_tests = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handlers for button clicks
  const handle_MIC_classification = () => {
    navigate('/dashboard/AMR-tests/mic-classification'); 
  };
  
  const handle_Gene_classification = () => {
    navigate('/dashboard/AMR-tests/gene-classification'); 
  };

  return (
    <div className={styles.AMR_tests_Container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <h2>Select a Classification task</h2>
        <div className={styles.buttonGrid}>
          <button className={styles.testButton} onClick={handle_MIC_classification}>
            MIC classification task
          </button>
          <button className={styles.testButton} onClick={handle_Gene_classification}>
            Gene classification task
          </button>
        </div>
      </main>
    </div>
  );
};

export default AMR_tests;