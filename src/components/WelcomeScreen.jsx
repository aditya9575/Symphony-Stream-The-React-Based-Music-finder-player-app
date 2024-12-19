import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeadphones, faSearch } from '@fortawesome/free-solid-svg-icons';

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <FontAwesomeIcon icon={faHeadphones} className="welcome-icon pulse" />
        <h1>Welcome to Symphony Stream</h1>
        <p>Discover millions of songs in your fingertips</p>
        <div className="features">
          <div className="feature">
            <FontAwesomeIcon icon={faSearch} />
            <p>Search your favorite songs</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faMusic} />
            <p>Listen to previews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;