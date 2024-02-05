import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import ProfilEdit from './ProfilEdit';
import Footer from './Footer';
import Reviews from './Reviews';

function PageProfilEdit({ lawyerData, reviews, showAddReviewButton }) {
    const navigate = useNavigate();

  const handleSaveClick = () => {

    navigate('/Profil');
  };
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar isHomePage={window.location.pathname === '/ProfilEdit'} />
      <div style={{ position: 'relative' }}>
        <ProfilEdit lawyerData={lawyerData} />
        <button className="buttonEdit" onClick={handleSaveClick}>Save</button>
      </div>
      <Reviews showAddReviewButton={false} reviews={reviews} />
      <Footer />
    </div>
  );
}

export default PageProfilEdit;
