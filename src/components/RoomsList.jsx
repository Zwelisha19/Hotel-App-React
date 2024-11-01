import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { database, auth } from '../config/firebaseConfig'; 
import { useAuth } from '../context/AuthContext'; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBookingDetails } from '../redux/bookingSlice';
import { signOut } from 'firebase/auth'; 
import './RoomList.css';

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [guests, setGuests] = useState(1); 
  const [maxPrice, setMaxPrice] = useState('');
  const { currentUser } = useAuth(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'rooms'));
        const roomsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          added_on: doc.data().added_on?.toDate().toISOString() 
        }));
        setRooms(roomsData);
        setFilteredRooms(roomsData);
      } catch (err) {
        console.error('Failed to fetch rooms:', err);
      }
    };

    fetchRooms();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate('/login'); 
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

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

    if (!room.status) {
      alert("This room is currently unavailable for booking.");
      return;
    }

    const checkIn = new Date(checkinDate);
    const checkOut = new Date(checkoutDate);
    const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const totalPrice = numberOfNights * room.price;

    dispatch(setBookingDetails({
      checkinDate,
      checkoutDate,
      guests,
      room: {
        ...room,
        added_on: room.added_on ? room.added_on : null 
      },
      totalPrice
    }));
    navigate(`/booking-summary`, {
      state: {
        checkinDate,
        checkoutDate,
        guests,
        room,
        totalPrice
      }
    });
  };

  const handleSearch = () => {
    let filtered = rooms;

    if (maxPrice) {
      filtered = filtered.filter(room => room.price <= maxPrice);
    }

    setFilteredRooms(filtered);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="rooms-list-container">
      <nav className="navbar">
        <img src="src/assets/images/Logo.PNG" alt="logo" />
        <Link to="#" onClick={handleLogout}>Logout</Link>
        <button className="profile-btn" onClick={() => navigate('/UserProfile')}>
          User Profile
        </button>
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
          <div className='search-div'>
            <label htmlFor="max-price">Max Price</label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button className='search-button' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      <div className="rooms-list">
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <div key={room.id} className={`room-item ${!room.status ? 'room-unavailable' : ''}`}>
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
                    <p>Max Guests: {room.beds}</p>
                  </div>
                  <div className='price-book-now-button-div'>
                    <p className='price-text'>
                      <strong>R{room.price}</strong><br />
                      per night
                    </p>
                    <button 
                      className='book-btn' 
                      onClick={() => handleBookNow(room)} 
                    >
                      Book Now
                    </button>
                    {!room.status && <p className="unavailable-text">Currently Unavailable</p>}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No rooms available.</p>
        )}
      </div>
    </div>
  );
};

export default RoomsList;
