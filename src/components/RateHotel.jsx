
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../config/firebaseConfig";
import { Link } from "react-router-dom";
import "./RateHotel.css";

const RateHotel = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(database, "reviews"));
    const reviewsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(reviewsData);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || comment === "") {
      alert("Please provide both a rating and a comment.");
      return;
    }

    await addDoc(collection(database, "reviews"), {
      rating,
      comment,
      timestamp: new Date(),
    });

    setRating(0);
    setComment("");
    fetchReviews();
  };

  return (
    <div className="rate-hotel">
      <h2>Rate Our Hotel</h2>
      <Link to="/RoomsList">Back</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Select</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your review here..."
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>

      <h3>Reviews</h3>
      <div className="reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Date: {new Date(review.timestamp.toDate()).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RateHotel;
