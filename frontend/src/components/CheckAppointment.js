import './styleb/CheckAppointment.css'
import { Link } from 'react-router-dom';
import React from 'react';

const CheckAppointment = ({ appointment }) => {
      
    const handleCancel = () => {
      };
    
      const handleConfirm = () => {
      };

  return (
    <div className="check-appointment">
      <h1>Appointment</h1>
      <table>
        <tbody>
          <tr>
            <td>Date and Time</td>
            <td>{`${appointment.Date} ${appointment.Time}`}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{appointment.Email}</td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td>{appointment.Name}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{appointment.PhoneNumber}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/PageProfil/appointments">
        <button className="button2" onClick={handleCancel}>Cancel</button>
      </Link>
    <span class="space-between"></span>
    <button className="button1" onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default CheckAppointment;
