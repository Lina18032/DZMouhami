import './styleb/ProfilEdit.css';
import React, { useState } from "react";

const ProfilEdit = ({ lawyerData }) => {
    

    return (
        <div className="ProfilLawyer">
            <div class="clearfix">
            <div className="left-block">
            <img src={lawyerData.photo} alt="Photo de l'avocat" /></div>
            <div className="left-block">
            <input type="text" placeholder={lawyerData.nom}/>
            <p className="specialites"> {lawyerData.specialites}</p>
            <p className='tel'><img className="logo" src='../media/bag.png' alt="Logo valise" />  Licenced for {lawyerData.experience} years</p>
            <div>
                {[...Array(lawyerData.etoiles)].map((star, index) => (
                    <span key={index} className="etoile">★</span>
                ))}
            </div>
            <p className='tel'><img className="logo" src='../media/telephone.png' alt="Logo téléphone" />{lawyerData.numero}</p>
            <p className='tel'><img className="logo" src='../media/Global.png' alt="logo site" /><input type="text"placeholder={lawyerData.urlSite}/></p>
            </div></div>
            <br></br>
            <button  className="button1">Messages</button>
            <span class="space-between"></span>
            <button className="button2">Appointment</button>

    
            <h1>About</h1>
            <p><h2><textarea className="diff" placeholder={lawyerData.about}></textarea></h2></p>
            <p>Spoken Languages<input type="text"placeholder={lawyerData.langues}/></p>
            
            <h1>Adress and Contact</h1>
            <p><img className="logo" src='../media/pointeur.png' alt="Logo pointeur" /><input type="text"placeholder={lawyerData.adresse}/></p>
            <p><img className="logo" src='../media/telephone.png' alt="Logo téléphone" /><input type="text"placeholder={lawyerData.numero}/></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102402.95565049788!2d7.505294223934695!3d36.672280207004704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f06d94452d8bc1%3A0x4978e283868338b7!2sA%C3%AFn%20Berda!5e0!3m2!1sfr!2sdz!4v1704049180512!5m2!1sfr!2sdz"
             width="600" 
             height="450" 
             style={{ border: "0" }} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
                
             </iframe>
             <h1>Practice Area</h1>
            <p className="specialites"><input type="text"placeholder= {lawyerData.specialites}/></p>
            
        </div>
        
    );
}

export default ProfilEdit;