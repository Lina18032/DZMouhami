// LanguageContext.js

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language is English
  
    const toggleLanguage = (lang) => {
      setLanguage(lang);
    };
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          {children}
        </LanguageContext.Provider>
      );
    };

export const useLanguage = () => {
  return useContext(LanguageContext);
};
