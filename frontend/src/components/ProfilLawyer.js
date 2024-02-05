import './styleb/ProfilLawyer.css';
import React, { useState } from "react";
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';


const ProfilLawyer = ({ lawyerData }) => {
    const navigate = useNavigate();

    const handleMessage = () => {
        // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
        navigate('/SendMessage');
  };




    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(8);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('popup-open');
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('popup-open');
    };
    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };
    const isPastDate = (date) => {
        const today = new Date();
        return date < today;
    };

    const filterDates = (date) => {
        return !isWeekend(date) && !isPastDate(date);
    };

    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
                <div className="left-block">
                    <img src={lawyerData.photo} alt="Photo de l'avocat" />
                </div>
                <div className="right-block">
                    <h1>{lawyerData.nom}</h1>
                    <p className='tel'><img className="logo" src='../media/bag.png' alt="years" />  Licenced for {lawyerData.experience} years</p>
                    <div>
                        {[...Array(lawyerData.etoiles)].map((star, index) => (
                            <span key={index} className="etoile">★</span>
                        ))}
                    </div>
                    <p className='tel'><img className="logo" src='../media/telephone.png' alt="tel" />{lawyerData.numero}</p>
                    <p className='tel'><img className="logo" src='../media/Global.png' alt="site" />{lawyerData.urlSite}</p>
                </div>
            </div>
            <br></br>
            <button className="button1" onClick={handleMessage}>Message</button>
            <span className="space-between"></span>
            <button className="button2" onClick={openModal}>Appointment</button>
            
            
                
                    <Modal className='modalclass'
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Appointment Modal"
                    >
                        <div className="popup">
                            <div className="popup-header">
                                <h2>Appointment</h2>
                                <button onClick={closeModal}>X</button>
                            </div>
                            <form className="popup-content">
                                <label>Your Name:</label>
                                <input type="text" />
                                <label>Your Email Adress:</label>
                                <input type="text" />
                                <label>Your Phone Number:</label>
                                <input type="text" />
                                <label>Select a date:</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="Click to select a date"
                                    filterDate={filterDates}
                                />
                                <label>Select an hour:</label>
                                <div className="appointment-timeline">
                                    <div className="timeline-marker" style={{ left: `calc(${(selectedHour - 8) * (100 / 7)}%)` }}></div>
                                    <input
                                        type="range"
                                        min="8"
                                        max="15"
                                        step="1"
                                        className="timeline-slider"
                                        value={selectedHour}
                                        onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                                    />
                                    <div className="selected-hour">{selectedHour}:00</div>
                                </div>
                                <div className="popup-footer">
                                <button type='button' onClick={closeModal}>Cancel</button>
                                <button type='submit'>Send</button>
                            </div>
                            
                            </form>
                           
                        </div>
                    </Modal>
               
            

            <h1>About</h1>
            <p>{lawyerData.about}</p>
            <p>Spoken Languages {lawyerData.langues}</p>
            <h1>Adress and Contact</h1>
            <p className='tel'><img className="logo" src='../media/location.png' alt="location" />{lawyerData.adresse}</p>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="tél" />{lawyerData.numero}</p>
            <iframe src={lawyerData.carteUrl}
             width="600" 
             height="450" 
             style={{ border: "0" }} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
             </iframe>
             <h1>Practice Area</h1>
            <p className="specialites"> {lawyerData.specialites}</p>
            
        </div>
    );
}

export default ProfilLawyer;