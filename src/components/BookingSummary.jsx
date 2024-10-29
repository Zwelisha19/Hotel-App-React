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



// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './BookingSummary.css'; 

// const BookingSummary = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { checkinDate, checkoutDate, guests, room } = location.state || {};

  
//   const checkIn = new Date(checkinDate);
//   const checkOut = new Date(checkoutDate);
//   const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
//   const totalPrice = numberOfNights * (room ? room.price : 0); // Safeguard in case room is undefined

//   const handleConfirmPayment = () => {
//     navigate('/Payment', { 
//       state: { 
//         checkinDate, 
//         checkoutDate, 
//         guests, 
//         room 
//       } 
//     });
//   };

//   const handleBackToRooms = () => {
//     navigate('/RoomsList'); 
//   };

//   return (
//     <div className="booking-summary">
//       <h1>Booking Summary</h1>
//       <p>Check-in Date: {checkinDate}</p>
//       <p>Check-out Date: {checkoutDate}</p>
//       <p>Number of Guests: {guests}</p>
//       <p>Room: {room ? room.name : 'Unavailable'}</p>
//       <p>Price per Night: R{room ? room.price : 0}</p>
//       <p>Total Price: R{totalPrice}</p>
//       <button onClick={handleConfirmPayment}>Confirm Payment</button>
//       <button onClick={handleBackToRooms} style={{ marginTop: '10px' }}>Back to Rooms</button>
//     </div>
//   );
// };

// export default BookingSummary;


















import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig';
import { useAuth } from '../context/AuthContext'; // Import the Auth context
import './BookingSummary.css'; 

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  const { currentUser } = useAuth(); // Get the current user

  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);
  const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfNights * (room ? room.price : 0); // Safeguard in case room is undefined

  const addBooking = async (bookingData) => {
    try {
      const docRef = await addDoc(collection(database, 'bookings'), bookingData);
      console.log('Booking added with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding booking: ', e);
    }
  };

  const handleConfirmPayment = async () => {
    const bookingData = {
      userId: currentUser.uid, // Make sure to get the current user's ID
      accommodationName: room.name,
      checkinDate,
      checkoutDate,
      guests,
      totalPrice,
      bookingStatus: 'confirmed',
    };

    await addBooking(bookingData); // Save the booking to Firestore

    // Navigate to the payment page
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
