import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import SmallProfilLawyer from './SmallProfilLawyer';
import Appointments from './Appointments';
import Footer from './Footer';


function PageAppointments({ lawyerData, appointments }) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <SmallProfilLawyer lawyerData={lawyerData} />
      <p style={{ margin: '30px 0 0 50px', padding: '10px 0' }} >
        <Link to="/Profil">
            Back to profil
        </Link> 
          </p>
      <Appointments appointments={appointments} />
      <Footer />
    </div>
  );
}

export default PageAppointments;