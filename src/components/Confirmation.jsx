import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css'

const Confirmation = () => {
  const location = useLocation();
  const { checkinDate, checkoutDate, guests, room, totalPrice } = location.state || {};

  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmation</h1>
      <p><strong>Room:</strong> {room ? room.name : 'Unavailable'}</p>
      <p><strong>Total Price:</strong> R{totalPrice}</p>
      <p><strong>Check-in Date:</strong> {checkinDate}</p>
      <p><strong>Check-out Date:</strong> {checkoutDate}</p>
      <p><strong>Number of Guests:</strong> {guests}</p>
      <button onClick={() => navigate('/RoomsList')}>Back to Rooms</button>
    </div>
  );
};

export default Confirmation;
