


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home'; 
import RoomsList from './components/RoomsList';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import TermsAndConditions from './Pages/TermsAndConditions'; 
import Login from './Pages/Login'; 
import SignUp from './Pages/SignUp'; 
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import NotFound from './Pages/NotFound'; 

function App() {
  return (
    <AuthProvider> 
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RoomsList" element={<RoomsList />} />
            <Route path="/Login" element={<Login />} /> 
            <Route path="/SignUp" element={<SignUp />} /> 

          
            <Route 
              path="/booking-summary" 
              element={
                <ProtectedRoute>
                  <BookingSummary />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/Payment" 
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/confirmation" 
              element={
                <ProtectedRoute>
                  <Confirmation />
                </ProtectedRoute>
              } 
            />

            <Route path="/terms" element={<TermsAndConditions />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;






