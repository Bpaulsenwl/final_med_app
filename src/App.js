import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Landing_Page/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;