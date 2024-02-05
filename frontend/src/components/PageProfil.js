import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Profil from './Profil';
import Footer from './Footer';
import Reviews from './Reviews';

function PageProfil({ lawyerData, reviews, showAddReviewButton}) {
    const navigate = useNavigate();

    const handleEditClick = () => {
        // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
        navigate('/ProfilEdit');
  };
  return (
    <div>
      <NavBar isHomePage={window.location.pathname === '/Profil'}  />
      <div style={{ position: 'relative' }}>
        <Profil lawyerData={lawyerData} />
        <button className="buttonEdit" onClick={handleEditClick}>Edit</button>
      </div>
      <Reviews showAddReviewButton={false} reviews={reviews} />
      <Footer/>
      
      
    </div>
  );
}

export default PageProfil;
