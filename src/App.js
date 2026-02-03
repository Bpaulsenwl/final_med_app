import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_up';
import Login from './Components/Login/Login';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import BookingConsultation from "./Components/BookingConsultation";
import Notification from './Components/Notification/Notification';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        <BrowserRouter>
        <Notification>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/reviews" element={<ReviewForm/>}/>
                <Route path="/booking-consultation" element={<BookingConsultation/>} />
            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;