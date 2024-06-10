import React, { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import '../../assets/css/LoadingAnimation.css';

const LoadingAnimation = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer;

    const startLoading = () => {
      setShowPopup(true);
    };

    const processWithDelay = () => {
      timer = setTimeout(startLoading, 10000);
    };

    const cleanup = () => {
      clearTimeout(timer);
    };

    processWithDelay(); // Iniciar el proceso con retraso

    return cleanup;
  }, []);

  return (
    <>
      {showPopup && (
        <div className="loading-popup">
          <div className="loading-content">
            <ThreeCircles
              visible={true}
              height={100}
              width={100}
              color="#f85c9e"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;
