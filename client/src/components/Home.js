// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the external CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="box">
        <Link to="/Login" className="box-link">
          Login
        </Link>
      </div>
      <div className="box">
        <Link to="/Register" className="box-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
