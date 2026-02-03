// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';

import './ReportsLayout.css';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2

const ReportsLayout = () => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState([]);



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
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }
    if(storedAppointmentData){
        setAppointmentData(storedAppointmentData);
    }
    



  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  console.log(appointmentData);

  return (
    <div className='reports-container'>
        <h1>Reports</h1>

        {appointmentData.length === 0 ? (
        <p className='no-reports'>
          Sorry, at the moment there are no Reports for you. Feel free to contact your visited Doctor if the Report is missing.
        </p>
      ) : (
        <>
        <table className='reports-table'>
            <tr>
                <th>Ser. No.</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>View Report</th>
                <th>Download Report</th>
            </tr>
            {appointmentData && appointmentData.map((appointment, index) => {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{appointment.doctorName}</td>
                    <td>{appointment.doctorSpeciality}</td>
                    <td>
                        <a href="patient_report.pdf" target='_blank' className='btn btn-primary'>View</a>
                    </td>
                    <td>
                        <a href="patient_report.pdf" target='_blank' download className='btn btn-primary'>Download</a>
                    </td>
                </tr>
            )})}
        </table>
        </>
      )}
    </div>
  )
}

export default ReportsLayout;
