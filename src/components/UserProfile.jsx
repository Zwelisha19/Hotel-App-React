import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-links">
        <Link to="/booking-history">Booking History</Link>
        <Link to="/update-profile">Update Profile</Link>
        <Link to="/rate-hotel">Rate the Hotel</Link>
      </div>
    </div>
  );
};

export default UserProfile;



  