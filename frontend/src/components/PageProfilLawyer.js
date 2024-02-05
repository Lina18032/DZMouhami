import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Profil from './Profil';

import Reviews from './Reviews';

function PageProfil({ lawyerData, reviews, showAddReviewButton}) {
    const navigate = useNavigate();

    const handleEditClick = () => {
        // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
        navigate('/PageProfil/edit');
  };
  return (
    <div style={{ paddingTop: '50px' }}>

      <div style={{ position: 'relative' }}>
        <Profil lawyerData={lawyerData} />
        <button className="buttonEdit" onClick={handleEditClick}>Edit</button>
      </div>
      <Reviews showAddReviewButton={false} reviews={reviews} />
      
      
    </div>
  );
}

export default PageProfil;
