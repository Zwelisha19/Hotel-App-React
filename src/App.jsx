import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import RoomsList from './components/RoomsList';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import TermsAndConditions from './Pages/TermsAndConditions';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import SignUp from './Pages/SignUp';
import UpdateProfile from './components/UpdateProfile';
import BookingHistory from './components/BookingHistory';
import RateHotel from './components/RateHotel';
import ForgotPassword from './Pages/ForgotPassword';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './Pages/NotFound';
import MapComponent from './components/Map';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/map" element={<MapComponent />}/>
            <Route path="*" element={<NotFound />} />

           
            <Route path="/RoomsList" element={<ProtectedRoute><RoomsList /></ProtectedRoute>} />
            <Route path="/UserProfile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="/UpdateProfile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
            <Route path="/RateHotel" element={<ProtectedRoute><RateHotel /></ProtectedRoute>} />
            <Route path="/booking-summary" element={<ProtectedRoute><BookingSummary /></ProtectedRoute>} />
            <Route path="/Payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/confirmation" element={<ProtectedRoute><Confirmation /></ProtectedRoute>} />
            <Route path="/BookingHistory" element={<ProtectedRoute><BookingHistory /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
