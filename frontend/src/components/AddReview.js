
import React, { useState } from 'react';
import StarRating from './StarRating';
import './styleb/AddReview.css';
import { Link } from 'react-router-dom';



const AddReview = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleCancel = () => {

      };
    
      const handleConfirm = () => {
      };

  return (
    <div className="add-review">
       <form>
      <div className='form-div'>
       
        <label>
          <h4><span className="required">*</span>Your First Name:</h4>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </label>
      </div>
      <div className='form-div'>
        <label>
        <h4><span className="required">*</span>Your Email Address:</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>
      </div>
      <div className='form-div'>
        <p>MuhamiDz will only use your email to contact you about your review. It will never be shared publicly.</p>
        <p>
        <h4><span className="required">*</span>Select a rating for your lawyer:</h4>
        </p>
        <div className="rating-container">
          <StarRating rating={rating} onRatingClick={handleRatingClick} />
          <input type="text" readOnly className="selected-rating" value={rating !== 0 ? `Rating: ${rating}` : ''} />
        </div>    
      </div>
      <div className='form-div'>
        <label>
          <h4><span className="required">*</span>Add a title</h4>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </label>
      </div>
      <div className='form-div'>
        <label>
          <h4><span className="required">*</span>Write your review</h4>
          <textarea></textarea>
        </label>
      </div>

      <div className='divbuttonreview'>

        <Link to="/Search/LawyerProfil" >
        <button className="button2" onClick={handleCancel}>Cancel</button>
        </Link>
        <button type='submit' className="button1" onClick={handleConfirm}>Confirm</button>
      </div>
      
    </form>
    </div>

  );
};

export default AddReview;
