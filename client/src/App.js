import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';



function App() {
  return (
    <div className="App">
       <Router>
        <div className="App">
          <Navbar /> 
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/Login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router> 
      
    </div>
  );
}

export default App;
