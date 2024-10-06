import React, { useState } from 'react';
import styles from './20_panel_test.module.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

import.meta.env.VITE_ML_FASTAPI_URL

const TwentyPanelTest = () => {
  const [inputs, setInputs] = useState({
    "Indole_production": 0, 
    "myo-Inositol_fermentation": 0, 
    "Gelatin_hydrolysis_22_c": 0,
    "D-Sorbitol_fermentation": 0,
    "Arginine_dihydrolase": 0,
    "L-Rhamnose_fermentation": 0,
    "Melibiose_fermentation": 0,
    "Citrate": 0,
    "Phenylanine_deaminase": 0,
    "Ornithine_decarboxylase": 0,
    "D-Glucose_acid": 0,
    "Lysine_deaminase": 0,
    "Urea_hydrolysis": 0,
    "Voges-Proskauer": 0,
    "Hydrogen_Sulfide_TSI": 0,
    "Sucrose_fermentation": 0,
    "D-Mannose_fermentation": 0,
    "ONPG_test": 0,
    "L-Arabinose_fermentation": 0
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
        requested_model: 'rf_20_panel_enterobac_100',
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
        <h2 className={styles.mainHeading}>20-Panel Test</h2>
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

export default TwentyPanelTest;