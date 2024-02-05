import React, { useState } from 'react';
import './stylea/featuredLawyers.css';
import Rating from './Rating'; // Make sure to adjust the path
import './stylea/LawyerList.css';
import { useLanguage } from './LanguageContext';


const FeaturedLawyers = ({ lawyers }) => {
  const { language, toggleLanguage } = useLanguage();

  const titry = getTitry(language);

  const [selectedLawyer, setSelectedLawyer] = useState(0);
  const positiveModulo = (n, m) => ((n % m) + m) % m;

  const handleNextLawyer = () => {
    setSelectedLawyer((prev) => (prev + 1) % lawyers.length);
  };
const handlePreviousLawyer = () => {
  setSelectedLawyer((next) => positiveModulo(next - 1, lawyers.length));
};


  return (
    <section className="featured-lawyers" style={{marginLeft : titry.marginLeft , marginRight : titry.marginRight , paddingLeft : titry.paddingLeft , paddingRight: titry.paddingRight}}>
      <div className='titleButton' style={{pandingRight: titry.pandingRight , pandingLeft: titry.pandingLeft ,flexDirection : titry.flexdirecion, marginRight : titry.marginRight ,pandingRight: titry.pandingRight , pandingLeft: titry.pandingLeft}}>
        <h1>{titry.titre}</h1>
        <div className="navigation-buttons">
            <button onClick={handlePreviousLawyer}>&larr;</button>
            <button onClick={handleNextLawyer}>&rarr;</button>
        </div>
      </div>
      <div className="lawyer-display" style={{flexDirection : titry.flexdirecion , alignSelf : titry.flexend}} >
        <img src={lawyers[selectedLawyer].image} alt={lawyers[selectedLawyer].name} />
        
        <div className='ktiba' style={{alignItems : titry.alignItems }}>
            <div className='rating'></div>
            <h2>Dr. {lawyers[selectedLawyer].name} <span className='spec'> / {lawyers[selectedLawyer].type} </span> </h2>
            <Rating value={lawyers[selectedLawyer].rating} />
            <div className='tel' style={{flexDirection : titry.flexdirecion }}>
                <img src='../media/telephone.png'/>
                <p>{lawyers[selectedLawyer].phone}</p>

            </div>
            <div className='tel' style={{flexDirection : titry.flexdirecion }}>
                <img src='../media/LOCATION.png'/>
                <p>{lawyers[selectedLawyer].Wilaya}</p>

            </div>
            <p style={{textAlign : titry.endktiba }}>{lawyers[selectedLawyer].description}</p>            
            
        </div>
      </div>

      <img src='../media/juge.png' className='juge' style={{transform : titry.scaleX , left: titry.left}}></img>
    </section>

    
  );
};



const getTitry = (language) => {
  console.log('Current Language:', language);
  if (language === 'ar') {
    return {
      titre : 'المحامون المميزون' , 
      cardAlign: 'end', 
      font: 'Amiri, serif',
      flexdirecion : 'row-reverse',
      endktiba: 'end',
      marginRight : '60px', 
      marginLeft: '0',
      paddingLeft: '0',
      paddingRight: '60px',
      alignItems: 'flex-end',
      flexend: 'flex-end' ,
      scaleX : 'scaleX(-1)',
      left: '0'
    };
  }
  else if(language === 'en') {
    return {
      titre : 'Featured Lawyers' , 

    };
  }

  // Add default styles for other languages or return an empty object
  return {};
};

export default FeaturedLawyers;
