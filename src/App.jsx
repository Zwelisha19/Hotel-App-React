/*
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home.jsx';
// import Login from './Pages/login.jsx';
// import SignUp from './Pages/signup.jsx';
// import ForgotPassword from './Pages/reset.jsx';
// import Room from './Pages/rooms.jsx';
// import NotFound from './Pages/notFound.jsx';
// import BookRoom from './Pages/bookroom.jsx';
import RoomsList from './components/RoomsList.jsx';
import BookingSummary from './components/BookingSummary';


function App() {
  

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/RoomsList" element={<RoomsList/>}/> */
        // <Route path="/RoomsList" element={<RoomsList />} />
        // <Route path="/booking-summary" element={<BookingSummary />} />
        /* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/reset" element={<ForgotPassword />} />
        {/* <Route path="/rooms" element={<Room />} /> */
        /* <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/notFound" element={<NotFound />} />  */
//       </Routes>
//     </Router>
//   </div>
//   )
// }

// export default App



/*
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home.jsx';

import RoomsList from './components/RoomsList.jsx';
import BookingSummary from './components/BookingSummary';


function App() {
  

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RoomsList" element={<RoomsList />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
     
      </Routes>
    </Router>
  </div>
  )
}

export default App

*/




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/home.jsx';
// import RoomsList from './components/RoomsList.jsx';
// import BookingSummary from './components/BookingSummary';
// import Payment from './components/Payment'; // Import the Payment component
// import Confirmation from './components/Confirmation'; // Import the Confirmation component

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/RoomsList" element={<RoomsList />} />
//           <Route path="/booking-summary" element={<BookingSummary />} />
//           <Route path="/Payment" element={<Payment />} /> {/* Add Payment route */}
//           <Route path="/Confirmation" element={<Confirmation />} /> {/* Add Confirmation route */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RoomsList" element={<RoomsList />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/terms" element={<TermsAndConditions />} /> {/* Add Terms and Conditions route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;



















