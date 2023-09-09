// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import the external CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
    <p className='collagename'> <span className="institute-name">Vidush Somany Institute Of Technology and Research</span></p>
      <ul className="nav-list">
        
         
        
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        
      </ul>
      
    </nav>
  );
};

export default Navbar;
