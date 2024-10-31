import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig';
import { useAuth } from '../context/AuthContext'; 
import './BookingSummary.css'; 

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  const { currentUser } = useAuth(); 

  const checkIn = new Date(checkinDate);
  const checkOut = new Date(checkoutDate);
  const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
  const totalPrice = numberOfNights * (room ? room.price : 0); 

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
      userId: currentUser.uid,
      accommodationName: room.name,
      checkinDate,
      checkoutDate,
      guests,
      totalPrice,
      bookingStatus: 'confirmed',
    };

    await addBooking(bookingData); 

    
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
