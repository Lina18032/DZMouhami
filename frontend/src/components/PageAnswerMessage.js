import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';;
import SmallProfilLawyer from './SmallProfilLawyer';
import AnswerMessage from './AnswerMessage';
import Footer from './Footer';


function PageAnswerMessage({message, lawyerData}) {
  return (
    <div style={{ paddingTop: '50px' }}>
      <NavBar />
      <SmallProfilLawyer lawyerData={lawyerData} />
      <AnswerMessage message={message} />
      <Footer />
    </div>
  );
}

export default PageAnswerMessage;