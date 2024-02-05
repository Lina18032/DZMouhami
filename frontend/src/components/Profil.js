import { Link } from 'react-router-dom';
import './styleb/Profil.css';
import React, { useState } from "react";

const Profil = ({ lawyerData }) => {
    

    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
            <div className="left-block">
            <img src={lawyerData.photo} alt="Photo de l'avocat" /></div>
            <div className="left-block">
            <h1>{lawyerData.nom}</h1>
            <p><img className="logo" src='../media/valise.png' alt="Logo valise" />  Licenced for {lawyerData.experience} years</p>
            <div>
                {[...Array(lawyerData.etoiles)].map((star, index) => (
                    <span key={index} className="etoile">★</span>
                ))}
            </div>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <p className='tel'><img className="logo" src='../media/Global.png' alt="logo site" />{lawyerData.urlSite}</p>
            </div></div>
            <br></br>
            <Link to="/PageProfil/messages">
                <button className="button1">Messages</button>
            </Link>
            <span class="space-between"></span>
            <Link to="/Profil/appointments">
                <button className="button2">Appointment</button>
            </Link>

    
            <h1>About</h1>
            <p>{lawyerData.about}</p>
            <p>Spoken Languages {lawyerData.langues}</p>
            <h1>Adress and Contact</h1>
            <p className='tel'><img className="logo" src='../media/location.png' alt="Logo pointeur" />{lawyerData.adresse}</p>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <iframe src= {lawyerData.carteUrl}
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

export default Profil;