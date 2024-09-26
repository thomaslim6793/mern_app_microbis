// client/src/components/ImageSlider/ImageSlider.jsx

import React, { useEffect, useState } from 'react';
import styles from './ImageSlider.module.css';

const images = [
  {
    src: '/MicroBIS_UI_Final_designs/logo/PNG/Logo 02.png',
    alt: 'Logo',
    isLogo: true
  },
  {
    src: '/homepage/MicroBIS-software.png',
    alt: 'Software',
    isLogo: false
  }
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); // Start the fading effect

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); // Remove the fading effect after the image changes
      }, 1000); // Duration of the fade-out effect
    }, 5000); // Total interval time (image display time + fade-out time)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className={styles.sliderContainer}>
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className={`${styles.sliderImage} ${isFading ? styles.fade : ''} ${
          currentImage.isLogo ? styles.logoImage : ''
        }`}
      />
      {currentImage.isLogo && (
        <div className={`${styles.logoText} ${isFading ? styles.fade : ''}`}>
          Your Personal Assistant
        </div>
      )}
    </div>
  );
};

export default ImageSlider;