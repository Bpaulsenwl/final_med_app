// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';

import './ReviewForm.css';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2

const ReviewForm = () => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [reviews, setReviews] = useState({});
  const [appointmentData, setAppointmentData] = useState(null);
  const [activeDoctor, setActiveDoctor] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    setReviews(storedReviews);

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
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



  return (
    <div className='reviews-container'>
        <h1>Reviews</h1>
        <table className='review-table'>
            <tr>
                <th>Ser. No.</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>Provide feedback</th>
                <th>Review given</th>
            </tr>
            {appointmentData && appointmentData.map((appointment, index) => {
                const review = reviews[appointment.doctorName];
                const hasReview = !!review;    
            return (
                <React.Fragment>
                <tr>
                    <td>{index+1}</td>
                    <td>{appointment.doctorName}</td>
                    <td>{appointment.doctorSpeciality}</td>
                    <td>
                        <button
                            className="btn"
                            onClick={() =>
                                setActiveDoctor(
                                activeDoctor === appointment.doctorName
                                    ? null
                                    : appointment.doctorName
                                )
                            }
                            disabled={hasReview}
                            style={{
                                opacity: hasReview ? 0.6 : 1,
                                cursor: hasReview ? "not-allowed" : "pointer",
                            }}
                            >
                            {hasReview
                                ? "Submitted"
                                : activeDoctor === appointment.doctorName
                                ? "Close Form"
                                : "Write Review"}
                        </button>
                        
                    </td>
                    <td></td>
                </tr>
                  {activeDoctor === appointment.doctorName && !hasReview && (
                    <tr>
                      <td colSpan="5">
                        
                      </td>
                    </tr>
                  )}
                  </React.Fragment>                
            )})}
        </table>
    </div>
  )
}

export default ReviewForm;
