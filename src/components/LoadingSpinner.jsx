import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" variant="primary" />
      <h2>Searching for your music...</h2>
    </div>
  );
};

export default LoadingSpinner;