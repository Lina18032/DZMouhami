import React , {useState} from 'react';
import './stylea/FilterModal.css'; // Import your CSS file for styling
import wilayas from './wilayas'; 

const FilterWindow = ({ filters, onLanguageChange, onExperienceChange, onRatingChange, onApplyFilters, onCancelFilters }) => {
  const [selectedYears, setSelectedYears] = useState(filters.years);
  const [selectedRating, setSelectedRating] = useState(filters.rating);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };



  return (
    <div className={`filter-window`}>
      <div className='model'>
      <h2>Filter Window</h2>
      {/* Add checkboxes for languages */}
      <div>
        <p>Languages :</p>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('Arabic')} />
          Arabic
        </label>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('French')} />
          French
        </label>
        <label>
          <input type="checkbox" onChange={() => onLanguageChange('English')} />
          English
        </label>
      </div>
      <div>
      <label>
  REVIEW RATING:
  <div className='rate'>
    {[1, 2, 3, 4].map((rating) => (
      <label key={rating}>
        <input
          type="radio"
          name="rating"
          value={rating}
          checked={selectedRating === rating}
          onChange={() => handleRatingChange(rating)}
        />
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className='ratestars'>★</span>
        ))}
        +{rating}.0
      </label>
    ))}
  </div>
</label>


      </div>
      <div>
        <label>Licenced for more than:</label>
        <input className='years' type='number' placeholder='years' onChange={(e) => onExperienceChange(e.target.value)}></input>
      </div>
      <div>

    
</div>




      {/* Add Apply and Cancel buttons */}
      <div className='boutons'>
        <button className='applyb' onClick={onApplyFilters}>Apply</button>
        <button className='cancelb' onClick={onCancelFilters}>Cancel</button>
      </div>
     </div>
      
    </div>
  );
};

export default FilterWindow;
