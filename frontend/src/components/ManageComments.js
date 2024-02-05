import React, { useState } from 'react';
import './style/ManageComments.css';

const ManageComments = ({ review }) => {
  const [added, setAdded] = useState(false);

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<span key={i} className="star-rating">★</span>);
    }
    return stars;
  };

  const handleAddClick = () => {
    setAdded(true);
    // Ajoutez ici la logique pour effectuer l'action 'Add'
  };

  return (
    <div className="manage-comments-container">
      <h2>Manage Comments</h2>
      <div>
        <strong>By: </strong> {review.Issuer}
      </div>
      <div>
        <strong>To: </strong> {review.Recipient}
      </div>
      <div>
        <strong>Email: </strong> {review.Email}
      </div>
      <div>
        <strong>Rating: </strong> {renderStars(review.Rate)}
      </div>
      <div>
        <strong>Title: </strong> {review.Title}
      </div>
      <div>
        <strong>Text: </strong> {review.text}
      </div>
      <button className="button1">Delete</button>
      <span className="space-between"></span>
      <button className={added ? "button1 added" : "button1"} onClick={handleAddClick}>
        {added ? "Added" : "Add"}
      </button>
      
    </div>
  );
};

export default ManageComments;
