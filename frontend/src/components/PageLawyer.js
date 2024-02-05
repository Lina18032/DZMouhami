import React from 'react';
import NavBar from './NavBar';
import ProfilLawyer from './ProfilLawyer';
import Footer from './Footer';
import Reviews from './Reviews';

function PageLawyer({ lawyerData, reviews, showAddReviewButton }) {
  return (
    <div >
      <NavBar isHomePage={window.location.pathname === '/PageLawyer'} />
      <ProfilLawyer lawyerData={lawyerData} />
      <Reviews showAddReviewButton={true} reviews={reviews} />
      <Footer />
    </div>
  );
}

export default PageLawyer;
