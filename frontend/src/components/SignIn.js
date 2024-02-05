// SignIn.js
import React, { useState } from 'react';
import './stylea/SignIn.css';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  const handleProfilClick = () => {
    navigate('/Profil');
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log('Login successful:', response.data);
      const lawyerId = response.data;
      console.log('Login successful. Lawyer ID:', lawyerId);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className='sign'>
      <NavBar isHomePage={window.location.pathname === '/SignIn'} />

      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>You don’t have an account?<a onClick={handleSignUpClick}>Sign Up</a></p>
      <div className='juge'>
        <img src='../media/juge.png' alt="Judge" />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
