import React , { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import FeaturedLawyers from './components/FeaturedLawyers';
import Footer from './components/Footer';
import Card from './components/Card';
import About from './components/about';
import LawyersList from './components/LawyerList';
import './App.css';
import { BrowserRouter as Router , Route , Switch, Routes } from 'react-router-dom';
import { useLanguage } from './components/LanguageContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/home';
import SearchPage from './components/searchPage';
import PageLawyer from './components/PageLawyer';
import Reviews from './components/Reviews';
import PageMessages from './components/PageMessages';
import PageAddReview from './components/PageAddingReview';
import PageProfil from './components/PageProfil';
import PageProfilEdit from './components/PageProfilEdit';
import PageAppointments from './components/PageAppointments';
import PageCheckAppointment from './components/PageCheckAppointment';



const lawyerData = {
  photo: 'https://avocatalgerien.com/wp-content/uploads/2018/11/BERBAGUI-230x230.jpg',
  nom: 'Mohamed Mehdi Berbagui',
  specialites: 'Droit administratif, Droit Affaires, Droit bancaire, Droit commercial, Droit de fusions et acquisitions, Droit des assurances, Droit des investissements, Droit des privatisations, Droit judiciaire',
  experience: 'Avocat à la Cour d’Alger',
  etoiles: 4,
  numero: '213021635570',
  urlSite: 'https://avocatalgerien.com',
  about: 'Nous sommes un cabinet d’avocat indépendant inscrit au barreau d’Alger, qui propose des services juridiques à forte valeur ajoutée en fiscalité à la fois personnelle et des affaires, aussi bien en conseil qu’en matière précontentieuse et devant les tribunaux administratifs. Nous avons également une activité judiciaire importante, en droit social et commercial notamment. Maître Berbagui délivre ses prestations de manière moderne et dynamique, en favorisant une très bonne communication et transparence avec ses clients.',
  langues: 'francais',
  adresse: '4, rue Khelifa Boukhalfa (ex-rue Richelieu) - Alger Centre, Alger, Algérie',
  carteUrl: 'https://www.google.com/maps/search/4,+rue+Khelifa+Boukhalfa+(ex-rue+Richelieu)+-+Alger+Centre,+Alger,+Alg%C3%A9rie/@36.7600338,3.0276898,14z/data=!3m1!4b1?hl=fr&entry=ttu',
};

const review ={ Issuer: 'AMEUR Amel', Recipient: 'KADOUCHE Rania', Email:'amelameur2003@gmail.com', Rate: 5 , Title:"I recommend !!",text: "Mr. Hughes is excellent with complex financial family law cases. He substituted into my case at the 11th hour and did an awesome job at trial. I highly recommend Mr. Hughes if you are facing trial without an attorney. He can step in to your case and digest the financial aspects accurately and present them at trial."}
const reviews = [
  {
    stars: 5,
    title: "Excellent service!",
    author: "Manar Kermane",
    date: "2024-01-23",
    comment: "J'ai été extrêmement satisfait du service fourni par cet avocat. Hautement recommandé!",
  },
  {
    stars: 4,
    title: "Très professionnel",
    author: "Line louna",
    date: "2024-01-22",
    comment: "L'avocat a traité mon cas de manière très professionnelle. Je suis contente de l'avoir choisi.",
  },
  {
    stars: 1,
    title: "Très professionnel",
    author: "Hafssa siline",
    date: "2024-01-22",
    comment: "L'avocat a traité mon cas de manière très professionnelle. Je suis contente de l'avoir choisi.",
  }
];
const messages = [
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 1 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 2 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 3 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 4 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 5},
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 6 },
  { Email: 'a_ameur@estin.dz', Message: 'hi sir, thank you so much', id: 6 },
  { Email: 'amelameur2003@gmail.com', Message: 'i just wanted to say thanks', id: 8 }
];

const appointments = [
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 1 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 2 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 3 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 4 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 5 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 6 },
  { Date: '22/01/2024', Time: '09:00', Name: "Ameur amel", Statues: "confirmed", id: 7 }
];

const appointment ={ Date: '22/01/2024', PhoneNumber:'047567843450', Email: 'amelameur2003@gmail.com', Time: '09:00', Name: "Ameur amel", Statues: "pending", id: 1 }



const App = () => {


  const handleSignIn = (credentials) => {
    // Implement your sign-in logic here
    console.log('Signing In with:', credentials);
    // You can add authentication logic, API calls, etc.
  };

    const { language, toggleLanguage } = useLanguage();


    return (
    <Router>
    <div className="App">
      
      <div className='content'>
       <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Search/LawyerProfil" element={<PageLawyer lawyerData={lawyerData} reviews={reviews} />} />
        <Route path="/Search/LawyerProfilAddReview" element={<PageAddReview lawyerData={lawyerData}  />} />
        <Route path="/Profil" element={<PageProfil lawyerData={lawyerData} reviews={reviews} />} />
        <Route path="/ProfilEdit" element={<PageProfilEdit lawyerData={lawyerData} reviews={reviews} />} />
        <Route path="/Profil/appointments" element={<PageAppointments lawyerData={lawyerData} appointments={appointments} />} />
        <Route path="/Profil/appointmentsCheck" element={<PageCheckAppointment lawyerData={lawyerData} appointment={appointment} />} />

       </Routes> 
      </div>    
    </div>      

    </Router>
  );
};

export default App;
