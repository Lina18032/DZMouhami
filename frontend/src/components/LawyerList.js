import React, { useState } from 'react';
import LawyerCard from './LawyerCard';
import FilterWindow from './FilterModal';
import { Link, useNavigate } from 'react-router-dom';
import './stylea/LawyerList.css';

const LawyersList = ({ lawyersData }) => {
  
  const [filters, setFilters] = useState({
    languages: [],
    specialty: '',
    wilaya: '',
    experience: '',
    rating: ''
  });

  const [showFilter, setShowFilter] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleLanguageChange = (language) => {
    setFilters({ ...filters, languages: [...filters.languages, language] });
  };

  const handleSpecialtyChange = (specialty) => {
    setFilters({ ...filters, specialty: specialty });
  };

  const handleWilayaChange = (wilaya) => {
    setFilters({ ...filters, wilaya: wilaya });
  };

  const handleExperienceChange = (experience) => {
    setFilters({ ...filters, experience: experience });
  };
  const handleRatingChange = (rating) => {
    setFilters({ ...filters, rating: rating });
  };
  const handleApplyFilters = () => {

    const newFilteredLawyers = lawyersData.filter((lawyer) => {
      const languageMatch =
        filters.languages.length === 0 || filters.languages.every((lang) => lawyer.languages.includes(lang));
      const experienceMatch = filters.experience === '' || lawyer.experience >= parseInt(filters.experience, 10);
      const ratingMatch = filters.rating === '' || lawyer.rating >= filters.rating;

      console.log('Lawyer:', lawyer.name);
      console.log('experience match:', experienceMatch);
    
      return languageMatch && experienceMatch && ratingMatch;
    });
    console.log('New Filtered Lawyers:', newFilteredLawyers);
  
    setFilteredLawyers(newFilteredLawyers);
    setShowFilter(false);
  
    // Show or hide "No Results" message
    const isWilayaValid = filters.wilaya === '' || newFilteredLawyers.some((lawyer) => lawyer.wilaya === filters.wilaya);
    const isSpecialtyValid =
      filters.specialty === '' || newFilteredLawyers.some((lawyer) => lawyer.specialty === filters.specialty);
    const areLanguagesValid = filters.languages.length === 0 || newFilteredLawyers.length > 0;
  
    setShowNoResults(!areLanguagesValid || !isWilayaValid || !isSpecialtyValid);
  };
  

  const handleCancelFilters = () => {
    setFilters({
      languages: [],
      specialty: '',
      wilaya: '',
      experience: '', 
      rating: ''
    });

    setFilteredLawyers([]);
    setShowFilter(false);
    setShowNoResults(false);
  };


  const showFilterButton = !showNoResults && filteredLawyers.length === 0;
  const showCancelButton = filteredLawyers.length > 0 || showNoResults;

  return (
    <div className='list' >
      {showFilterButton && (
        <button className='filter' onClick={() => setShowFilter(true)}>
          <img src='../media/filter.png' alt="Filter" />
          Filter
        </button>
      )}

      {showCancelButton && (
        <button className='cancelfilter' onClick={() => handleCancelFilters()}>
          <img src='../media/Cross.png' alt="Cancel" />
          Cancel
        </button>
      )}

      {showNoResults && <p>No lawyer with specified filters.</p>}

      {(filteredLawyers.length > 0 ? filteredLawyers : lawyersData).map((lawyer, index) => (
        <Link to={'/Search/LawyerProfil'}>
           <LawyerCard key={index} lawyerData={lawyer} />
        </Link>
      ))}

{showFilter ? (
  <FilterWindow
    filters={filters}
    onLanguageChange={handleLanguageChange}

    onExperienceChange={handleExperienceChange}
    onRatingChange={handleRatingChange}

    
    onApplyFilters={handleApplyFilters}
    onCancelFilters={handleCancelFilters}
  />
) : (
  null
)}



    </div>
  );
};

export default LawyersList;