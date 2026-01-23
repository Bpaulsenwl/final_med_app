// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      console.log(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }

  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      <div className="notification-container">
      {isLoggedIn && appointmentData && appointmentData.map((appointment) => (
        <>
          <div className="appointment-card">
            <span className="close">x</span>
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <strong>Doctor:</strong> {appointment.doctorName}<br />
                <strong>Speciality:</strong> {appointment.doctorSpeciality}<br />
                <strong>Name:</strong> {appointment.name}<br />
                <strong>Phone Number:</strong> {appointment.phoneNumber}<br />
                <strong>Date:</strong> {appointment.appDate}<br />
                <strong>Timeslot:</strong> {appointment.appTime}<br />
              </p>
            </div>
          </div>
        </>
      ))}
      </div>
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;