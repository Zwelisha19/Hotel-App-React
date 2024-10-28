import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { useNavigate, useLocation } from 'react-router-dom';
import { database } from '../../config/firebaseConfig';
import './RoomList.css';

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState(1); 
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'rooms'));
        const roomsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRooms(roomsData);
      } catch (err) {
        console.error('Failed to fetch rooms:', err);
      }
    };

    fetchRooms();

 
    const today = new Date();
    const bookingDate = location.state?.bookingDate || today;
    setCheckinDate(bookingDate.toISOString().split('T')[0]);
  }, [location.state]);

  const handleCheckoutChange = (e) => {
    const selectedCheckoutDate = e.target.value;
    if (new Date(selectedCheckoutDate) <= new Date(checkinDate)) {
      alert("Check-out date must be after check-in date.");
      setCheckoutDate(''); 
    } else {
      setCheckoutDate(selectedCheckoutDate);
    }
  };

  const handleBookNow = (room) => {
    if (!checkinDate || !checkoutDate) {
      alert("Please select both check-in and check-out dates before booking.");
      return;
    }

    navigate(`/booking-summary`, { 
      state: { 
        checkinDate, 
        checkoutDate, 
        guests, 
        room 
      } 
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="rooms-list-container">
      <nav className="navbar">
        <img src="src/assets/images/Logo.PNG" alt="logo" />
      </nav>

      <div className='checkin-div'>
        <div className='checkin-form'>
          <div className='num-of-days'>
            <label htmlFor="checkin-date">Check in</label>
            <input
              type="date"
              id='checkin-date'
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
              min={today}
              required
            />
            <label htmlFor="checkout-date">Check out</label>
            <input
              type="date"
              id='checkout-date'
              value={checkoutDate}
              onChange={handleCheckoutChange} 
              min={today}
              required
            />
          </div>
          <div className='guest-div'>
            <label htmlFor="guests">Guests</label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
             
              {[...Array(4)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="rooms-list">
        {rooms.map(room => (
          <div key={room.id} className="room-item">
            <div className='title-image-div'>
              <h1>{room.name}</h1>
              <div className='room-image-div'>
                <img src={room.image} alt="Room" />
              </div>
            </div>
            <div className='room-details-div'>
              <div className='room-description-div'>
                <p>{room.description}</p>
              </div>
              <div className='room-price-div'>
                <div className='number-of-guests-div'>
                  <p>Max Guests: 4</p>
                </div>
                <div className='price-book-now-button-div'>
                  <p className='price-text'>
                    <strong>R{room.price}</strong><br />
                    per night
                  </p>
                  <button className='book-btn' onClick={() => handleBookNow(room)}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;



















