import React from 'react';
import './stylea/LawyerCard.css' ;
import Rating from './Rating'; // Make sure to adjust the path


const LawyerCard = ({ lawyerData }) => {
  const { name, image, languages, rating, wilaya, specialty , phone , experience} = lawyerData;

  return (
    <div className='lawyercard'>
        <img className='lawyercard-image' src={image} alt={`${name}'s profile`}/>
        
        <div className='ktiba' >
            <div className='rating'></div>
            <h2>Dr. {name} <span className='spec'>in {specialty}</span> </h2>
            <div className='tel'>
                <img src='../media/Bag.png'/>
                <p>Licensed for : <span>{experience}</span> years</p>
            </div>
            <p>Languages: {languages.join(', ')}</p>
            <Rating value={rating} />
            <div className='tel'>
                <img src='../media/telephone.png'/>
                <p>{phone}</p>

            </div>
            <div className='tel'>
                <img src='../media/LOCATION.png'/>
                <p>{wilaya}</p>

            </div>

           
            
        </div>
  


      
    </div>
    
    
  );
};

export default LawyerCard;