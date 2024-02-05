import React from 'react';
import './stylea/card.css';

const Card = ({ title, text, imageSrc, language  }) => {
  const stylesCards = getStylesCards(language);



  return (
<div className="card">
      <div>
         <img src={imageSrc}  className="card-image" />
      </div>
      <div className="card-content">
        <h2 style={{ fontFamily: stylesCards.font, textAlign: stylesCards.cardAlign }}>{title}</h2>
        <p style={{ fontFamily: stylesCards.font , textAlign: stylesCards.cardAlign }}>{text}</p>
      </div>
    </div>
  );
};
const getStylesCards = (language) => {
  console.log('Current Language:', language);
  if (language === 'ar') {
    return {
      cardAlign: 'end', 
      font: 'Amiri, serif',
    };
  }

  // Add default styles for other languages or return an empty object
  return {};
};

export default Card;
