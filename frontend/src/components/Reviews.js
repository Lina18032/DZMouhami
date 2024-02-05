import { Link } from 'react-router-dom';
import './styleb/Reviews.css';
import React, { useState } from 'react';

const Reviews = ({ reviews, showAddReviewButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    setCurrentIndex(Math.max(0, Math.min(newIndex, reviews.length - 1)));
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1>Reviews</h1>
        {showAddReviewButton && (
        <Link to="/Search/LawyerProfilAddReview" className="button1">
          Add a Review
        </Link>
      )}
      </div>

      <div className="reviews-and-buttons" style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => handleScroll('left')} disabled={currentIndex === 0}>
            &larr;
        </button>
        <div className="reviews-list-container" style={{ overflow: 'hidden', width: '100%' }}>
          <div className="reviews-list" style={{ display: 'flex', width: `${reviews.length * 100}%`, transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`review ${index === currentIndex ? 'active' : ''}`}
                style={{ width: `${100 / reviews.length}%` }}
              >
                <div className="stars">
                  <div>
                    {[...Array(review.stars)].map((star, index) => (
                      <span key={index} className="etoile">★</span>
                    ))}
                  </div>
                </div>
                <div className="title">{review.title}</div>
                <div className="author">Posted By {review.author} | {review.date}</div>
                <div className="comment">{review.comment}</div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll('right')} disabled={currentIndex === reviews.length - 1}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
