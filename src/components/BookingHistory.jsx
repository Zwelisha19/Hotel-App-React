import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../config/firebaseConfig'; 
import { useAuth } from '../context/AuthContext'; 
import { Link } from 'react-router-dom';
import './BookingHistory.css';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const { currentUser } = useAuth(); 

  useEffect(() => {
    const fetchBookings = async () => {
      if (!currentUser) return;

      try {
        const bookingsRef = collection(database, 'bookings'); 
        const q = query(bookingsRef, where('userId', '==', currentUser.uid)); 

        const querySnapshot = await getDocs(q);
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(bookingsData);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
      }
    };

    fetchBookings();
  }, [currentUser]);

  return (
    <div className="booking-history-container">
      <div className="button-container">
        <Link to="/UserProfile" className="btn">
          Back
        </Link>
      </div>
      <h1>Booking History</h1>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id} className="booking-item">
              <h2>{booking.accommodationName}</h2>
              <p>Status: {booking.bookingStatus}</p>
              <p>Check-in Date: {booking.checkinDate}</p>
              <p>Check-out Date: {booking.checkoutDate}</p>
              <p>Guests: {booking.guests}</p>
              <p>Total Price: R{booking.totalPrice}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingHistory;
