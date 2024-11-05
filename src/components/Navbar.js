import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <FaReact className="navbar-icon" /> 
      <span className="navbar-text">Gallery Img</span> 
    </div>
  );
};

export default Navbar;