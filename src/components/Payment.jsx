import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../config/firebaseConfig'; // Adjust the import path based on your project structure
import './Payment.css'; 

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const paymentAmount = (room ? room.price * guests : 0).toFixed(2); 

  const handleGoToConfirmation = () => {
    navigate('/confirmation', {
      state: { checkinDate, checkoutDate, guests, room },
    });
  };

  const handleBooking = async () => {
    const bookingData = {
      roomId: room.id, // Ensure room.id is available
      roomName: room.name,
      checkin: checkinDate,
      checkout: checkoutDate,
      guests,
      price: room.price,
    };

    try {
      await addDoc(collection(database, 'bookings'), bookingData);
      console.log('Booking confirmed!');
    } catch (err) {
      setFormError('Failed to confirm booking. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p><strong>Room:</strong> {room ? room.name : 'Unavailable'}</p>
      <p><strong>Price:</strong> R{paymentAmount} per night</p>
      <p><strong>Check-in Date:</strong> {checkinDate}</p>
      <p><strong>Check-out Date:</strong> {checkoutDate}</p>
      <p><strong>Number of Guests:</strong> {guests}</p>
      
      <PayPalScriptProvider options={{ "client-id": "AfAOPT-rgkwFZjOSY8CVmjSspVGOf4SUgY1UC5oxhZuK8b7CuAVHOwMPo-14ka-_FOwjZ9qQw2MXlV5A" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: paymentAmount, 
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              await actions.order.capture();
              setPaymentSuccess(true);
              await handleBooking(); // Call the booking function after payment
              handleGoToConfirmation(); 
            } catch (error) {
              setFormError('Payment failed. Please try again.');
              console.error(error);
            }
          }}
          onError={(error) => {
            setFormError('Payment failed. Please try again.');
            console.error(error);
          }}
        />
      </PayPalScriptProvider>

      {formError && <p className="error-message">{formError}</p>}

      {paymentSuccess && (
        <div className="success-message">
          <p>Payment successful!</p>
          <button onClick={handleGoToConfirmation}>Proceed to Confirmation</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
