import React from 'react';
import styles from './Home.module.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import Header from '../Header/Header'; // Import the reusable Header component

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header /> {/* Include the Header component */}
      
      {/* Body wrapper where the ImageSlider will be placed */}
      <div className={styles.bodyWrapper}>
          <div className={styles.imageSliderContainer}>
            <ImageSlider />
          </div>
          <div className={styles.infoContainer}>
            <h2 style={{ fontSize: '32px', textAlign: 'center', margin: '0 auto' }}>An AI powered lab assistant</h2>
            <img src="/about/Vilvli AMR challenge figure 1.png" className={styles.image} />
          </div>
      </div>
    </div>
  );
}

export default Home;