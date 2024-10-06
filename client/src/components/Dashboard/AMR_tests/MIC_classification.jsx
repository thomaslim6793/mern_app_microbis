import React, { useState, useEffect } from 'react';
import styles from './MIC_classification.module.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const MIC_classification = () => {
  const [inputs, setInputs] = useState({});
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState({});
  const [fetchError, setFetchError] = useState(null);

  // Define the correct column order, including "Year"
  const orderedColumns = [
    "Phenotype",
    "Species",
    "Family",
    "Country",
    "State",
    "Gender",
    "Age Group",
    "Speciality",
    "Source",
    "In / Out Patient",  // Before Year
    "Year",              // Year between "In / Out Patient" and "Antibiotic"
    "Antibiotic",
    // Include all other columns as necessary...
  ];

  // Fetch categories from the FastAPI endpoint when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_ML_FASTAPI_URL}/categories/mic_i_classification_best`);
        const categoriesData = response.data;

        setCategories(categoriesData);

        // Initialize inputs with the first category for each column
        const initialInputs = Object.keys(categoriesData).reduce((acc, column) => {
          acc[column] = categoriesData[column][0]; // Set default category values
          return acc;
        }, {});

        // Manually add non-categorical columns like 'Year' with default values
        initialInputs['Year'] = 2020; // Set the default value for 'Year' column

        setInputs(initialInputs); // Update the state with both categorical and non-categorical columns
      } catch (error) {
        setFetchError('Error fetching categories');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === 'Year' ? parseInt(value) : value, // Ensure 'Year' remains a number
    }));
  };

  // Handle form submission to make the prediction API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // Ensure that the inputs are ordered according to the `orderedColumns` array
      const orderedInputs = orderedColumns.reduce((acc, column) => {
        if (inputs.hasOwnProperty(column)) {
          acc[column] = inputs[column];
        }
        return acc;
      }, {});

      const response = await axios.post(`${import.meta.env.VITE_ML_FASTAPI_URL}/predict`, {
        requested_model: 'mic_i_classification_best',
        data: [orderedInputs], // Send the ordered inputs
      });

      setPredictionResult(response.data);
    } catch (error) {
      console.error('Error connecting to the prediction API', error);
      alert('Error connecting to the prediction API');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <h2 className={styles.mainHeading}>MIC Classification</h2>

        {fetchError && <p className={styles.error}>{fetchError}</p>}

        {isLoading && <p>Loading...</p>}

        {!isLoading && !fetchError && (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            {/* Render form inputs dynamically based on the fetched categories */}
            {orderedColumns.map((column) => (
              <div key={column} className={styles.inputGroup}>
                <label htmlFor={column}>{column}</label>

                {/* If the column is in categories, render a select input; otherwise, render a text input */}
                {categories[column] ? (
                  <select
                    id={column}
                    name={column}
                    value={inputs[column] || ''}
                    onChange={handleChange}
                    className={styles.selectInput}
                  >
                    {categories[column].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={column === 'Year' ? 'number' : 'text'}
                    id={column}
                    name={column}
                    value={inputs[column] || (column === 'Year' ? 2020 : '')} // Default to 2020 for Year
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                )}
              </div>
            ))}

            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              Submit
            </button>
          </form>
        )}

        {predictionResult && (
          <div className={styles.resultContainer}>
            <h2>Prediction Result:</h2>
            <pre>{JSON.stringify(predictionResult, null, 2)}</pre>
          </div>
        )}
      </main>
    </div>
  );
};

export default MIC_classification;