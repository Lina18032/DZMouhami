import React from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Footer from './Footer';
import FeaturedLawyers from './FeaturedLawyers';
import About from './about';
import Header from './Header';
import { useLanguage } from './LanguageContext';




const Home = () =>  {

// Dummy data for featured lawyers
const { language, toggleLanguage } = useLanguage();
const getFeaturedLawyersData = () => {
    console.log('Current Language:', language);
    if (language === 'en') {
      return [
        { id: 1, name: 'John Miller', rating: 5, type: 'family law', Wilaya :"Annaba", description: "-Our family law expert is your dedicated advocate, providing compassionate guidance through divorce and custody matters.", image: '../media/lawyer.jpg', phone: "07113564978" },
        { id: 2, name: 'Lawyer 2', rating: 4, type: 'business law',Wilaya :"Annaba", description: "-Your ally in business law, we secure your ventures with expertise in contracts and effective dispute resolution", image: '../media/lawyer2.jpg', phone: "07113564978" },
        { id: 3, name: 'Lawyer 3', rating: 4, type: 'criminal law',Wilaya :"Annaba", description: "-Specializing in criminal law, our expert defends your rights and provides strong representation in legal matters.", image: '../media/lawyer3.jpg', phone: "07113564978" },
        { id: 4, name: 'Lawyer 4', rating: 4.5, type: 'environmental law',Wilaya :"Annaba", description: "-As stewards of environmental law, we are committed to protecting the planet through legal expertise and advocacy.", image: '../media/lawyer4.jpg', phone: "07113564978" },
        { id: 5, name: 'Lawyer 5', rating: 4.3, type: 'international law',Wilaya :"Annaba", description: "-Navigating the complexities of international law, we provide expert guidance on global legal matters and relations.", image: '../media/lawyer2.jpg', phone: "07113564978" },
        { id: 6, name: 'Lawyer 6', rating: 4, type: 'administrative law',Wilaya :"Annaba", description: "-Specializing in administrative law, we navigate government regulations, ensuring fairness and legality in every action.", image: '../media/lawyer3.jpg', phone: "07113564978" },
              ];
    } else if (language === 'ar') {
      return [
        { id: 1, name: 'John Miller', rating: 5, type: 'قانون العائلة', Wilaya :"Annaba", description: "- خبير قانون الأسرة لدينا هو المدافع المتفاني عنك، حيث يقدم لك التوجيه الرحيم فيما يتعلق بمسائل الطلاق والحضانة.", image: '../media/lawyer.jpg', phone: "07113564978" },
        { id: 2, name: 'Lawyer 2', rating: 4, type: 'قانون العمل',Wilaya :"Annaba", description: "- حليفكم في قانون الأعمال، نحن نؤمن مشاريعكم بالخبرة في العقود والحل الفعال للمنازعات", image: '../media/lawyer2.jpg', phone: "07113564978" },
        { id: 3, name: 'Lawyer 3', rating: 4, type: 'قانون جنائي',Wilaya :"Annaba", description: "- متخصصون في القانون الجنائي، خبيرنا يدافع عن حقوقك ويوفر تمثيلاً قويًا في المسائل القانونية.", image: '../media/lawyer3.jpg', phone: "07113564978" },
        { id: 4, name: 'Lawyer 4', rating: 4.5, type: 'القانون البيئي',Wilaya :"Annaba", description: "- باعتبارنا مشرفين على القانون البيئي، نحن ملتزمون بحماية الكوكب من خلال الخبرة القانونية والدعوة.", image: '../media/lawyer4.jpg', phone: "07113564978" },
        { id: 5, name: 'Lawyer 5', rating: 4.3, type: 'قانون دولي',Wilaya :"Annaba", description: "- من خلال التعامل مع تعقيدات القانون الدولي، نقدم إرشادات الخبراء بشأن المسائل والعلاقات القانونية العالمية.", image: '../media/lawyer2.jpg', phone: "07113564978" },
        { id: 6, name: 'Lawyer 6', rating: 4, type: 'قانون إداري',Wilaya :"Annaba", description: "- متخصصون في القانون الإداري، ونحن نتنقل بين اللوائح الحكومية، ونضمن العدالة والشرعية في كل إجراء.", image: '../media/lawyer3.jpg', phone: "07113564978" },
      ];
  };  };
  const featuredLawyers = getFeaturedLawyersData();

  


    const getCardsData = () => {
        console.log('Current Language:', language);
        if (language === 'en') {
          return [
            // English data
            { id: 5, title: 'Effortless Search', text: 'Find the right lawyer with our powerful search tool. Effortlessly navigate through specialties, locations, and more..', imageSrc: '../media/GroupSearch.png' },
            { id: 6, title: 'Online Booking', text: 'Streamline your legal consultations. Schedule appointments online at your convenience, hassle-free.', imageSrc: '../media/GroupCalendar.png' },
            { id: 7, title: 'Client Reviews', text: 'Read real client reviews to make informed decisions. Discover the experiences of others with our rated lawyers.', imageSrc: '../media/GroupRating.png' },
            { id: 8, title: 'National Network', text: 'Connect with a diverse range of lawyers across Algeria. Our extensive national network ensures you find the expertise you need', imageSrc: '../media/GroupMap.png' },
          ];
        } else if (language === 'ar') {
          return [
            // Arabic data
            { id: 5, title: 'البحث السهل', text: 'ابحث عن المحامي المناسب باستخدام أداة البحث القوية لدينا. تصفح بسهولة بين التخصصات والمواقع وأكثر..', imageSrc: '../media/GroupSearch.png' },
            { id: 6, title: 'الحجز عبر الإنترنت', text: 'بسط استشاراتك القانونية. قم بجدولة المواعيد عبر الإنترنت في وقتك المناسب، بدون عناء.', imageSrc: '../media/GroupCalendar.png' },
            { id: 7, title: 'تقييمات العملاء', text: 'اقرأ تقييمات العملاء الحقيقية لاتخاذ قرارات مستنيرة. اكتشف تجارب الآخرين مع محامينا المصنفين.', imageSrc: '../media/GroupRating.png' },
            { id: 8, title: 'الشبكة الوطنية', text: 'تواصل مع مجموعة متنوعة من المحامين في جميع أنحاء الجزائر. تضمن شبكتنا الوطنية الواسعة أن تجد الخبرة التي تحتاج إليها', imageSrc: '../media/GroupMap.png' },        ];
        }
      };  
      const cardsData = getCardsData(); 
  return (
    <div>
    <NavBar isHomePage={window.location.pathname === '/'} />
      <Header />
      <section className="cards">
            {cardsData.map((card) => (
                <Card key={card.id} title={card.title} text={card.text} imageSrc={card.imageSrc} language={language}  />
            ))}
       </section>

       {/* Featured Lawyers */}

        <FeaturedLawyers lawyers={featuredLawyers} language={language} />

        <About/>
        <Footer />
      

      
    </div>
  );
}
export default Home;