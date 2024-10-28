/*
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Integrate your payment logic here (e.g., calling an API)
    setPaymentSuccess(true);
  };

  const handleGoToConfirmation = () => {
    navigate('/confirmation'); // Redirect to a confirmation page after successful payment
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Room: {room.name}</p>
      <p>Price: R{room.price} per night</p>
      <button onClick={handlePayment}>Pay Now</button>
      
      {paymentSuccess && (
        <div>
          <p>Payment successful!</p>
          <button onClick={handleGoToConfirmation}>Proceed to Confirmation</button>
        </div>
      )}
    </div>
  );
};

export default Payment;

*/









/*
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Integrate your payment logic here (e.g., calling an API)
    setPaymentSuccess(true);
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Room: {room ? room.name : 'Unavailable'}</p>
      <p>Price: R{room ? room.price : 0} per night</p>
      <button onClick={handlePayment}>Pay Now</button>
      
      {paymentSuccess && (
        <div>
          <p>Payment successful!</p>
          <button onClick={() => navigate('/Confirmation')}>Proceed to Confirmation</button>
        </div>
      )}
    </div>
  );
};

export default Payment;

*/









/*
const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { checkinDate, checkoutDate, guests, room } = location.state || {};
  
    console.log('Payment state:', { checkinDate, checkoutDate, guests, room }); // Log to check values
  
    const [paymentSuccess, setPaymentSuccess] = useState(false);
  
    const handlePayment = () => {
      // Simulate payment logic
      setPaymentSuccess(true);
    };
  
    return (
      <div>
        <h1>Payment</h1>
        <p>Room: {room ? room.name : 'Unavailable'}</p>
        <p>Price: R{room ? room.price : 0} per night</p>
        <button onClick={handlePayment}>Pay Now</button>
        
        {paymentSuccess && (
          <div>
            <p>Payment successful!</p>
            <button onClick={() => handleGoToConfirmation()}>Proceed to Confirmation</button>
          </div>
        )}
      </div>
    );
  };
  

  */





  import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './Payment.css'; // Import the CSS file

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkinDate, checkoutDate, guests, room } = location.state || {};
  
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const paymentAmount = (room ? room.price * guests : 0).toFixed(2); // Calculate total price

  const handleGoToConfirmation = () => {
    navigate('/confirmation', {
      state: { checkinDate, checkoutDate, guests, room },
    });
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p><strong>Room:</strong> {room ? room.name : 'Unavailable'}</p>
      <p><strong>Price:</strong> R{paymentAmount} per night</p>
      <p><strong>Check-in Date:</strong> {checkinDate}</p>
      <p><strong>Check-out Date:</strong> {checkoutDate}</p>
      <p><strong>Number of Guests:</strong> {guests}</p>
      
      <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: paymentAmount, // Total price
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              await actions.order.capture();
              setPaymentSuccess(true);
              handleGoToConfirmation(); // Navigate after success
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
