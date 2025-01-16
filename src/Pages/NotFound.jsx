import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; 

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default NotFound;
