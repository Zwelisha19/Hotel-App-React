import React, { useState, useEffect } from 'react';
import './updateProfile.css'; 
import { auth, database } from "../config/firebaseConfig";
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; 
        if (!user) {
          navigate('/login'); 
          return;
        }
        
        const usersRef = collection(database, 'Users');
        const q = query(usersRef, where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserInfo({
            name: userData.name,
            surname: userData.surname,
            phoneNumber: userData.phoneNumber,
            email: userData.email,
          });
        } else {
          setError('User not found');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) return;

    try {
      const usersRef = collection(database, 'Users');
      const q = query(usersRef, where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDocRef = doc(usersRef, querySnapshot.docs[0].id);
        await updateDoc(userDocRef, {
          name: userInfo.name,
          surname: userInfo.surname,
          phoneNumber: userInfo.phoneNumber,
        });
        setSuccessMessage('Profile updated successfully!'); 
        setTimeout(() => {
          navigate('/RoomsList'); 
        }, 2000); 
      }
    } catch (err) {
      console.error('Error updating user profile:', err);
      setError('Error updating user profile: ' + err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="update-profile-container">
      <h1 className="update-profile-title">Update Profile</h1>
      {error && <p className="error-text">{error}</p>}
      {successMessage && <p className="success-text">{successMessage}</p>} 
      <form className="update-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Surname:</label>
          <input
            type="text"
            name="surname"
            className="form-input"
            value={userInfo.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            className="form-input"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={userInfo.email}
            readOnly 
          />
        </div>
        <button type="submit" className="update-profile-button">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
