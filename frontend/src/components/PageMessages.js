import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import SmallProfilLawyer from './SmallProfilLawyer';
import Messages from './Messages';
import Footer from './Footer';


function PageMessages({ lawyerData, messages }) {
  return (
    <div >
      <NavBar  isHomePage={window.location.pathname === '/SendMessage'} />
      <SmallProfilLawyer lawyerData={lawyerData} />
      <p style={{ margin: '30px 0 0 50px', padding: '10px 0' }} >
        <Link to="/PageProfil">
            Back to profil
        </Link>
      </p>
      <Messages messages={messages} />
      <Footer />
    </div>
  );
}

export default PageMessages;