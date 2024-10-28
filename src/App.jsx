// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/home.jsx';
// import RoomsList from './components/RoomsList.jsx';
// import BookingSummary from './components/BookingSummary';
// import Payment from './components/Payment';
// import Confirmation from './components/Confirmation';
// import TermsAndConditions from './Pages/TermsAndConditions'; 

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/rooms-list" element={<RoomsList />} />
//           <Route path="/booking-summary" element={<BookingSummary />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/confirmation" element={<Confirmation />} />
//           <Route path="/terms" element={<TermsAndConditions />} /> 
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



/*
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home.jsx';
import RoomsList from './components/RoomsList.jsx';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import TermsAndConditions from './Pages/TermsAndConditions'; 
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <AuthProvider>  
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RoomsList" element={<RoomsList />} />
            
           
            <Route 
              path="/booking-summary" 
              element={
                <ProtectedRoute>
                  <BookingSummary />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/payment" 
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
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;


*/


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home'; 
import RoomsList from './components/RoomsList';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import TermsAndConditions from './Pages/TermsAndConditions'; 
import Login from './Pages/Login'; // Import your Login component
import { AuthProvider } from './context/AuthContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import NotFound from './Pages/NotFound'; // Optional: Add a NotFound component

function App() {
  return (
    <AuthProvider>  {/* Wrap the app in AuthProvider for authentication context */}
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RoomsList" element={<RoomsList />} />
            <Route path="/Login" element={<Login />} /> {/* Route to the login page */}
            
            {/* Protected routes for booking-related actions */}
            <Route 
              path="/booking-summary" 
              element={
                <ProtectedRoute>
                  <BookingSummary />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/payment" 
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
            <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;







