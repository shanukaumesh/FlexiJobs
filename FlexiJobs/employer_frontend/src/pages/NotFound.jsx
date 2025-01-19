import React from 'react';
import '../styles/NotFound.css';
import NotFoundImage from '../assets/404.png'; // Replace with your image path

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <img src={NotFoundImage} alt="404 Not Found" className="not-found-image" />
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
        <button className="not-found-btn" onClick={() => (window.location.href = '/')}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
