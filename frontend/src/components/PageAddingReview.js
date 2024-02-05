import { Link } from 'react-router-dom';
import React from 'react';
import ProfilLawyer from './ProfilLawyer';
import AddReview from './AddReview';
import Footer from './Footer';
import NavBar from './NavBar';


function PageAddReview({ lawyerData}) {
  return (
    <div>
      <NavBar isHomePage={window.location.pathname === '/AddReview'} />
      <ProfilLawyer lawyerData={lawyerData} />
      <p style={{ margin: '30px 0 0 50px', padding: '10px 0' }} >
        <Link to="/Search/LawyerProfil">
        &lt; Back to profil
        </Link> 
          </p>
      <AddReview />
      <Footer />
    </div>
  );
}

export default PageAddReview;