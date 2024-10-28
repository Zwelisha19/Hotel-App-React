/*
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking!</p>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      <p>Room: {room.name}</p>
      <p>Your booking has been confirmed!</p>
      <button onClick={() => navigate('/rooms-list')}>Back to Rooms</button>
    </div>
  );
};

export default Confirmation;
*/











import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Thank you for your booking!</p>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      <p>Room: {room ? room.name : 'Unavailable'}</p> {/* Safeguard here */}
      <p>Your booking has been confirmed!</p>
      <button onClick={() => navigate('/rooms-list')}>Back to Rooms</button>
    </div>
  );
};

export default Confirmation;
