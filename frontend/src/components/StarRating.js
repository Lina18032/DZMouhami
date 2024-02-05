import './styleb/StarRating.css';

import React from 'react';

const StarRating = ({ rating, onRatingClick }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : 'empty'}`}
          onClick={() => onRatingClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
