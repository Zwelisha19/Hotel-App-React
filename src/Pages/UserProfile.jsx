import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-links">
        <Link to="/BookingHistory">Booking History</Link>
        <Link to="/UpdateProfile">Update Profile</Link>
        <Link to="/RateHotel">Rate the Hotel</Link>
        <Link to="/RoomsList">Back</Link>
      </div>
    </div>
  );
};

export default UserProfile;



  