import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LawyersList from './LawyerList';
import {useState} from 'react';
import  {useEffect} from 'react';





const SearchPage = () =>  {
    
const lawyersData = [
  {
    name: 'Mohamed Hallamdalil',
    image: 'https://avocatalgerien.com/wp-content/themes/vantage/images/no-thumb.jpg',
    languages: ['French' , 'English'],
    rating: null, // Replace with actual rating
    wilaya: 'Mostaganem',
    specialty: [
      'Droit Affaires',
      'Droit commercial',
      'Droit de la propriété intellectuelle',
      'Droit des contrats',
      'Droit des entreprises',
      'Droit des recouvrement de créances',
      'Droit des sociétés',
      'Droit des transports',
      'Droit du travail',
      'Droit familial',
      'Droit maritime',
      'Droit pénal',
    ],
    experience: 4, // Replace with actual experience
    phone: '0665225632',
  },
  {
    name: 'Mohamed Mehdi',
    image: 'https://avocatalgerien.com/wp-content/uploads/2018/11/BERBAGUI-230x230.jpg',
    languages: ['French'],
    rating: 4,
    wilaya: 'Alger',
    specialty: [
      'Droit administratif',
      'Droit Affaires',
      'Droit bancaire',
      'Droit commercial',
      'Droit de fusions et acquisitions',
      'Droit des assurances',
      'Droit des investissements',
      'Droit des privatisations',
      'Droit judiciaire',
    ],
    experience: 14,
    phone: '213021635570',
  },
  {
    name: 'Mohamed Kouache',
    image: 'https://avocatalgerien.com/wp-content/themes/vantage/images/no-thumb.jpg',
    languages: ['Arabic' ,'French' ],
    rating: 3,
    wilaya: 'Alger',
    specialty: [
      'Droit administratif',
      'Droit Affaires',
      'Droit civil',
      'Droit commercial',
      'Droit de l\'immobilier',
    ],
    experience: 7, // You haven't provided experience information
    phone: '213556818290',
  },
    {
      name: 'Mohamed Avocatalgerien',
      image: 'https://avocatalgerien.com/wp-content/uploads/2015/01/avocate-1-230x230.jpg',
      languages: ['French'],
      rating: 2,
      wilaya: 'Oran',
      specialty: [
        'Droit civil',
        'Droit commercial',
        'Droit de l\'immobilier',
        'Droit de la propriété intellectuelle',
        'Droit des étrangers',
        'Droit familial',
        'Droit pénal',
      ],
      experience: 25, // You haven't provided experience information
      phone: '00213552670005',
    },
    
    {
      name: 'Mohamed Cabnet',
      image: 'https://avocatalgerien.com/wp-content/uploads/2016/01/imageitalia-230x230.jpg',
      languages: ['French'],
      rating: 1, // You haven't provided rating information
      wilaya: 'Algiers',
      specialty: [
        'Droit civil',
        'Droit commercial',
        'Droit de la santé',
        'Droit des entreprises',
      ],
      experience: 15, // You haven't provided experience information
      phone: '00390687766970',
    },
    {
      name: 'Mohamed Boucekka',
      image: 'https://avocatalgerien.com/wp-content/uploads/2015/12/100_1788_New1_New1_New2-230x230.jpg',
      languages: ['French'],
      rating: 5, // You haven't provided rating information
      wilaya: 'Algiers',
      specialty: [
        'Droit administratif',
        'Droit bancaire',
        'Droit civil',
        'Droit commercial',
        'Droit de l\'immobilier',
        'Droit des assurances',
        'Droit des entreprises',
        'Droit du sport',
        'Droit du travail',
        'Droit familial',
        'Droit pénal',
      ],
      experience: 10, // You haven't provided experience information
      phone: '0771584314',
    },
    {
      name: 'Mohamed Hama',
      image: 'https://avocatalgerien.com/wp-content/uploads/2016/06/IMG_20160425_131459-230x230.jpg',
      languages: ['French'],
      rating: 5, // You haven't provided rating information
      wilaya: 'Algiers',
      specialty: [
        'Droit administratif',
        'Droit bancaire',
        'Droit civil',
        'Droit commercial',
        'Droit de l\'environnement',
        'Droit de l\'immobilier',
        'Droit de la consommation',
        'Droit de la santé',
        'Droit des assurances',
        'Droit des entreprises',
        'Droit des transports',
        'Droit du sport',
        'Droit du travail',
      ],
      experience: 23, // You haven't provided experience information
      phone: '0550304467',
    },
    {
      name: 'Mohamed Abdeldjalil Belkhodja',
      image: 'https://avocatalgerien.com/wp-content/uploads/2016/08/avocat001-2-230x230.jpg',
      languages: ['French'],
      rating: 3, // You didn't provide the rating for this lawyer
      wilaya: 'Algiers',
      specialty: 'Droit administratif, Droit bancaire, Droit civil, Droit commercial, Droit de l\'environnement, Droit de l\'immobilier, Droit de la consommation, Droit de la santé, Droit des assurances, Droit des entreprises, Droit des transports, Droit du sport, Droit du t',
      experience: 5, // You didn't provide the experience for this lawyer
      phone: '0670389009'
    }
    
  
  ];  
  const [loading, setLoading] = useState(true);
  const [lawyersDat, setLawyersData] = useState([]);

  useEffect(() => {
    // Simulate a delay to represent data loading
    const delay = setTimeout(() => {
      // Your static lawyer data
      const data = [
        // ... your lawyer data here ...
      ];
      setLawyersData(lawyersData);
      setLoading(false);
    }, 500); // 2000 milliseconds (2 seconds) delay

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);
  
  return (
    <div className='searchContent'>
      <NavBar />
      {loading ? (
       <div className='loading-overlay'>
       <div className='loading-spinner'></div>
       <p>Loading...</p>
     </div>
      ) : (
        <LawyersList lawyersData={lawyersDat} />
      )}
      <Footer />
    </div>
  );
};
export default SearchPage;
