import React from 'react';
import './stylea/navBar.css';
import { useLanguage } from './LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
      // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
      navigate('/Login');
};


  const location = useLocation();

    const { toggleLanguage } = useLanguage();
    const isHomePage = location.pathname === '/';
    const isSearchPage = location.pathname === '/search';
    const navStyle = {
      background: isHomePage ? 'transparent' : 'black',
      position: isHomePage ? 'absolute' : 'relative',
      // Add other styles as needed
    };
  
    return (
      <nav style={navStyle}>
        <div className="logo">
            <img src="../media/logo.png" alt="Profile" />
        </div>

        <div className="language-circles">
            <button><a href='/login' onClick={handleLoginClick}>
                <img src="../media/Account.png" alt="Profile" /></a>
            </button>
            <button onClick={() => toggleLanguage('en')}>
                <img src="../media/UK.png" alt="Profile" className="circle" />
            </button>
            <button onClick={() => toggleLanguage('ar')}>
                <img src="../media/ALG.jpg" alt="Profile" className="circle" />
            </button>

        </div>

    </nav>
  );
};

export default NavBar;
