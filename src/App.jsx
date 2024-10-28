import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home.jsx';
import RoomsList from './components/RoomsList.jsx';
import BookingSummary from './components/BookingSummary';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import TermsAndConditions from './Pages/TermsAndConditions'; // Import TermsAndConditions page

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms-list" element={<RoomsList />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/terms" element={<TermsAndConditions />} /> {/* Add Terms and Conditions route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


















