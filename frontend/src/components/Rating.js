// Rating.js
import React from 'react';
import './stylea/Rating.css';


const Rating = ({ value }) => {
  const roundedValue = Math.round(value);

  const generateStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < roundedValue ? 'star filled' : 'star'}>★</span>);
    }

    return stars;
  };

  return <div className="rating">{generateStars()}</div>;
};

export default Rating;
