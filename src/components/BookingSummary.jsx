/*import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './BookingSummary.css';
import './BookingSummary.css';



const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};

  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);
  const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfNights * room.price;

  const handleConfirmPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <h1>Booking Summary</h1>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      <p>Room: {room.name}</p>
      <p>Price per Night: R{room.price}</p>
      <p>Total Price: R{totalPrice}</p>
      <button onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default BookingSummary;
*/

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './BookingSummary.css'; // Make sure this path is correct

// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { checkinDate, checkoutDate, guests, room } = location.state || {};

//   // Calculate nights and total price
//   const checkIn = new Date(checkinDate);
//   const checkOut = new Date(checkoutDate);
//   const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
//   const totalPrice = numberOfNights * room.price;

//   const handleConfirmPayment = () => {
//     navigate('/payment');
//   };

//   return (
//     <div className="booking-summary">
//       <h1>Booking Summary</h1>
//       <p>Check-in Date: {checkinDate}</p>
//       <p>Check-out Date: {checkoutDate}</p>
//       <p>Number of Guests: {guests}</p>
//       <p>Room: {room.name}</p>
//       <p>Price per Night: R{room.price}</p>
//       <p>Total Price: R{totalPrice}</p>
//       <button onClick={handleConfirmPayment}>Confirm Payment</button>
//     </div>
//   );
// };

// export default BookingSummary;







/*
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingSummary.css'; // Make sure this path is correct

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};

  // Calculate nights and total price
  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);
  const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfNights * room.price;

  const handleConfirmPayment = () => {
    navigate('/Payment');
  };

  const handleBackToRooms = () => {
    navigate('/RoomsList'); // Adjust the path according to your routing setup
  };

  return (
    <div className="booking-summary">
      <h1>Booking Summary</h1>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      <p>Room: {room.name}</p>
      <p>Price per Night: R{room.price}</p>
      <p>Total Price: R{totalPrice}</p>
      <button onClick={handleConfirmPayment}>Confirm Payment</button>
      <button onClick={handleBackToRooms} style={{ marginTop: '10px' }}>Back to Rooms</button>
    </div>
  );
};

export default BookingSummary;
*/



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingSummary.css'; 

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};

  
  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);
  const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfNights * (room ? room.price : 0); // Safeguard in case room is undefined

  const handleConfirmPayment = () => {
    navigate('/Payment', { 
      state: { 
        checkinDate, 
        checkoutDate, 
        guests, 
        room 
      } 
    });
  };

  const handleBackToRooms = () => {
    navigate('/RoomsList'); 
  };

  return (
    <div className="booking-summary">
      <h1>Booking Summary</h1>
      <p>Check-in Date: {checkinDate}</p>
      <p>Check-out Date: {checkoutDate}</p>
      <p>Number of Guests: {guests}</p>
      <p>Room: {room ? room.name : 'Unavailable'}</p>
      <p>Price per Night: R{room ? room.price : 0}</p>
      <p>Total Price: R{totalPrice}</p>
      <button onClick={handleConfirmPayment}>Confirm Payment</button>
      <button onClick={handleBackToRooms} style={{ marginTop: '10px' }}>Back to Rooms</button>
    </div>
  );
};

export default BookingSummary;
