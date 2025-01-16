import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../config/firebaseConfig";
import { useAuth } from "../context/AuthContext";
import "./BookingSummary.css";

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
      const docRef = await addDoc(
        collection(database, "bookings"),
        bookingData
      );
      console.log("Booking added with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding booking: ", e);
      throw e;
    }
  };

  const handleProceedToPayment = async () => {
    const bookingData = {
      userId: currentUser.uid,
      accommodationName: room.name,
      checkinDate,
      checkoutDate,
      guests,
      totalPrice,
      bookingStatus: "confirmed",
    };

    try {
      await addBooking(bookingData);

      navigate("/Payment", {
        state: {
          checkinDate,
          checkoutDate,
          guests,
          room,
          totalPrice,
        },
      });
    } catch (error) {
      console.error("Failed to proceed to payment:", error);
    }
  };

  const handleBackToRooms = () => {
    navigate("/RoomsList");
  };

  return (
    <div className="booking-summary-container">
      <h1>Booking Summary</h1>
      <p>
        <strong>Room:</strong> {room ? room.name : "Unavailable"}
      </p>
      <p>
        <strong>Price per Night:</strong> R{room ? room.price : 0}
      </p>
      <p>
        <strong>Total Price:</strong> R{totalPrice}
      </p>
      <p>
        <strong>Check-in Date:</strong> {checkinDate}
      </p>
      <p>
        <strong>Check-out Date:</strong> {checkoutDate}
      </p>
      <p>
        <strong>Number of Guests:</strong> {guests}
      </p>
      <button className="proceed-payment-btn" onClick={handleProceedToPayment}>
        Proceed to Payment
      </button>
      <button onClick={handleBackToRooms} style={{ marginTop: "10px" }}>
        Back to Rooms
      </button>
    </div>
  );
};

export default BookingSummary;
