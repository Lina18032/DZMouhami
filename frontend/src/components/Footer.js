import React from 'react';
import './stylea/footer.css';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language, toggleLanguage } = useLanguage();

  const getFooteeer = () => {
      if (language === 'en') {
        return {
          title1: 'Quick Links',
          par11: 'How It Works',
          par12: 'FAQ', 

          title2 : 'Legal Information',
          par21 : 'Terms of Services',
          par22 : 'Privacy Policy',

          title3 : 'Languages',
          par31 : 'English',
          par32 : 'Arabic',

          title4 : 'Social Media',
          title5 : '2023 Muhami Dz. All rights reserved.' ,

          languageClass: 'english-text',
          formAlign: 'flex-start',
          formMargin: '10px 8%',
          headerAlign: 'flex-start',
          formFlex: 'row',
          paddingInputRight: '10px',
          paddingInputLeft: '8%',
          searchIconPositionLeft: '10px',
        };
      } else if (language === 'ar') {
        return {
          title1: 'روابط سريعة',
          par11: 'كيف يعمل',
          par12: 'الأسئلة الشائعة',


          title2 : 'المعلومات القانونية',
          par21 : 'شروط الخدمة',
          par22 : 'سياسة الخصوصية',

          title3 : 'اللغات',
          par31 : 'الإنجليزية',
          par32 : 'العربية',

          title4 : 'وسائل التواصل الاجتماعي',
          title5 : 'ديزاد-محامي , كل الحقوق محفوظة 2023' ,   
          languageClass: 'arabic-text',
          formAlign: 'flex-end',
          formMargin: '10px 11%',
          headerAlign: 'flex-end',
          formFlex: 'row-reverse',
          font: 'Amiri, serif',
          inputText: 'end',
          marginAboutLeft : '0', 
          marginAboutRight : '50px'
        };
      }
    };

  const footeeer = getFooteeer();

  return (
    <footer>
        <div className='logo'>
            <img src='../media/logo.png' alt='logo'/> 
        </div>
        <div className='three'>
            <div className='three1'>
              <div className='one'>
                  <h3 >{footeeer.title1}</h3>
                  <a href='#'>{footeeer.par11}</a>
                  <a href='#'>{footeeer.par12}</a>
              </div>
            
              <div className='one'>
                  <h3>{footeeer.title2}</h3>
                  <a href='#'>{footeeer.par21}</a>
                  <a href='#'>{footeeer.par22}</a>
              </div>
            </div>
            <div className='three1'>
              <div className='one'>
                  <h3>{footeeer.title3}</h3>
                  <button >{footeeer.par31}</button>
                  <button >{footeeer.par32}</button>
              </div>

              <div className='one'>
                <h3>{footeeer.title4}</h3>
                <div className='social'>                  
                    <a href='#'> <img src='../media/facebook.png'></img></a>
                    <a href='#'><img src='../media/Linkedin.png'></img></a>
                    <a href='#'><img src='../media/instagram.png'></img></a>
                    <a href='#'><img src='../media/X.png'></img></a>
                </div>
              </div>
            </div>
            



        </div>
        

      <p>©  {footeeer.title5}</p>
    </footer>
  );
};

export default Footer;
