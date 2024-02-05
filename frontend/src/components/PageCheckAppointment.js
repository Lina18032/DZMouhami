import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import SmallProfilLawyer from './SmallProfilLawyer';
import CheckAppointment from './CheckAppointment';
import Footer from './Footer';


function PageCheckAppointment({appointment, lawyerData}) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar isHomePage={window.location.pathname === '/check'} />
      <SmallProfilLawyer lawyerData={lawyerData} />
      <CheckAppointment appointment={appointment}/>
      <Footer />
    </div>
  );
}

export default PageCheckAppointment;