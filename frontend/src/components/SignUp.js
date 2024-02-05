import React, { useState } from 'react';
import './styleb/SignUp.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
        navigate('/Login');
  };

  const handleProfilClick = () => {
    // Naviguer vers la page d'édition lorsqu'on appuie sur le bouton "Edit"
    navigate('/Profil');
  };
  const [formData, setFormData] = useState({
    first_name: '',
    last_name : '',
    email: '',
    specialty : '',
    about : '',
    languages : [],
    address : '',
    wilaya : '',
    experiences : '',
    phone_number : '',
    photo : null,
    password : '',
    confirm_password : ''
  });
  

  




  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);

      setFormData({
        ...formData,
        languages: updatedLanguages,
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        photo: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    
      navigate('/');
    
  };

  return (
    
<div className="page-container-SignUp">
 <NavBar isHomePage={window.location.pathname === '/SignUp'} />

  <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
          <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <input type="text" name="speciality" placeholder="Speciality" value={formData.speciality} onChange={handleInputChange} />
          <textarea
            name="about"
            placeholder="About"
            value={formData.about}
            onChange={handleInputChange}
          />
          <input type="text" name="practiceArea" placeholder="Practice Areas(separate them with a coma please!)" value={formData.practiceArea} onChange={handleInputChange} />


          <label>
          <span>Spoken Languages:</span>
          <div className="spoken-languages">
            {["Arabic", "French", "English", "Spanish", "Italian"].map((language) => (
              <label key={language}>
                <input
                  type="checkbox"
                  name="spokenLanguages"
                  value={language}
                  onChange={handleInputChange}
                />
                {language}
              </label>
            ))}
          </div>
        </label>
        <input type="text" name="city" placeholder="Adress(city)" value={formData.city} onChange={handleInputChange} />
        <input type="text" name="wilaya" placeholder="Wilaya" value={formData.wilaya} onChange={handleInputChange} />
        <input type="text" name="licenseYears" placeholder="Licensed For/ per years" value={formData.licenseYears} onChange={handleInputChange} />

        <div className='addPic'>

          <input type="file" name="profileImage" onChange={handleInputChange} />
          <div className="file-upload-icon">+</div>
        
        </div>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} />
        

        <button className='button1' type="submit" >Sign Up</button>
        <div className="terms-of-use">
            <span>By signing up, you agree to our <a href="#">Terms of Use</a>, and <a href="#">Privacy Policy</a>.</span>
        </div>
      </form>
      <div className="sign-in-section">
        <p>Already have an account? <a onClick={handleSignInClick}>Sign In</a></p>
      </div>
      </div>
 <Footer />
</div>
  );
};

export default SignUp;
