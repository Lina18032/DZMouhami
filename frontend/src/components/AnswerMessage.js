import { Link } from 'react-router-dom';
import './style/AnswerMessage.css';
import React, { useState } from 'react';

const AnswerMessage = ({ message }) => {
  const [response, setResponse] = useState('');

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleCancel = () => {
    // Ajouter la logique d'annulation ici si nécessaire
    setResponse('');
  };

  const handleSave = () => {
    // Ajouter la logique d'enregistrement ici si nécessaire
    console.log('Response saved:', response);
  };

  return (
    <div className="answer-message">
      <h1>Messages</h1>
      <div className="email-section">
        <h2 className='test'>Email</h2>
        <p>{message.email}</p>
        <h2 className='test'>Message</h2>
        <p>{message.text}</p>
        <h2 className='test'>Write your response</h2>
      </div>
      <div className="textarea-container">
      <textarea
        value={response}
        onChange={handleResponseChange}
      /></div>
      <Link to="/PageProfil/messages">
         <button className="button2" onClick={handleCancel}>Cancel</button>
      </Link>
    <span class="space-between"></span>
    <button className="button1" onClick={handleSave}>Save</button>
      
    </div>
  );
};

export default AnswerMessage;
