import React, { useState } from 'react';
import styles from './8_panel_test.module.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

import.meta.env.VITE_ML_FASTAPI_URL

const EightPanelTest = () => {
  const [inputs, setInputs] = useState({
    "Urea_hydrolysis": 0,
    "Lactose_fermentation": 0,
    "D-Glucose_acid": 0,       // Use hyphens instead of underscores
    "Citrate": 0,
    "Motility": 0,
    "Indole_production": 0,
    "Hydrogen_Sulfide_TSI": 0,
    "D-Glucose_Gas": 0         // Use hyphens instead of underscores
});

  const [predictionResult, setPredictionResult] = useState(null); // State to store the prediction result
  const [isLoading, setIsLoading] = useState(false); // State to show a loading spinner

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: parseInt(value) });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true); // Show loading state
      console.log('API URL:', import.meta.env.VITE_ML_FASTAPI_URL);
      const response = await axios.post(`${import.meta.env.VITE_ML_FASTAPI_URL}/predict`, {
        requested_model: 'rf_8_panel_enterobac_100',
        data: [inputs],
      });
      console.log(response.data); // Log the response
      setPredictionResult(response.data); // Store the prediction result in state
    } catch (error) {
      console.error(error);
      alert('Error connecting to the prediction API');
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <h2 className={styles.mainHeading}>8-Panel Test</h2>
        <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
          {Object.keys(inputs).map((inputName) => (
            <div key={inputName} className={styles.inputGroup}>
              <label htmlFor={inputName}>{inputName.replace(/_/g, ' ')}</label>
              <select
                name={inputName}
                id={inputName}
                value={inputs[inputName]}
                onChange={handleChange}
              >
                <option value={0}>Negative</option>
                <option value={1}>Positive</option>
              </select>
            </div>
          ))}
          <button type="button" className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </form>

        {/* Display the prediction result */}
        {isLoading && <p className={styles.loadingText}>Loading...</p>}
        {predictionResult && (
          <div className={styles.resultContainer}>
            <h3>Prediction Result</h3>
            <pre>{JSON.stringify(predictionResult, null, 2)}</pre>
          </div>
        )}
      </main>
    </div>
  );
};

export default EightPanelTest;