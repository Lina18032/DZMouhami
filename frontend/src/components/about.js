import react from 'react';
import { useLanguage } from './LanguageContext';
import './stylea/about.css';
const About = () => {
    const { language, toggleLanguage } = useLanguage();

    const getStyles = () => {
        if (language === 'en') {
          return {
            title: 'About Us',
            par1: 'Welcome to DZ-Muhami, the leading platform for connecting with skilled and experienced lawyers in Algeria. Our mission is to simplify the process of finding legal representation by providing a comprehensive directory of qualified attorneys in various specialties.',
            par2: 'At DZ-Muhami, we recognize the importance of making informed decisions regarding legal issues. Our platform enables users to easily explore attorney profiles, read client reviews, and schedule appointments. Whether you are looking for legal advice or representation, DZ-Muhami is your trusted source.',
            par3: 'Explore our platform, discover experienced law professionals, and take control of your legal journey with confidence. thank you for choosing us',
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
            title: 'حولنا',
            par1: 'مرحبًا بك في ديزاد-محامي، المنصة الرائدة للتواصل مع محامين ماهرين وذوي خبرة في الجزائر. مهمتنا هي تبسيط عملية العثور على تمثيل قانوني من خلال توفير دليل شامل للمحامين المؤهلين في مختلف التخصصات.',
            par2: 'في ديزاد-محامي، ندرك أهمية اتخاذ قرارات مستنيرة فيما يتعلق بالقضايا القانونية. تمكن منصتنا المستخدمين من استكشاف ملفات المحامين، وقراءة تقييمات العملاء، وجدولة المواعيد بسهولة. سواء كنت تبحث عن استشارة قانونية أو تمثيل، ديزاد-محامي هو مصدرك الموثوق.',
            par3: 'استكشف منصتنا، اكتشف محترفي القانون ذوي الخبرة، وتحكم في رحلتك القانونية بثقة. شكرًا لاختيارك',
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
  
    const styles = getStyles();





    return ( 
        <section className='about' style={{marginLeft : styles.marginAboutLeft , marginRight : styles.marginAboutRight}}>
            <h1 style={{fontFamily: styles.font , alignSelf: styles.inputText }}>{styles.title}</h1>
            
            <div className='imgktiba' style={{flexDirection: styles.formFlex}} >
                <img src="../media/law.jpg" alt="Profile" />
            
                <div className='ktibaa'>
                    <p style={{fontFamily: styles.font , textAlign: styles.inputText }}>{styles.par1}</p>

                    <p style={{fontFamily: styles.font  , textAlign: styles.inputText}} >{styles.par2}</p>

                    <p style={{fontFamily: styles.font , textAlign: styles.inputText }}>{styles.par3}</p>

                </div>
            </div>



        </section>
     );
}
 
export default About;