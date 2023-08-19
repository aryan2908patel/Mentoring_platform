import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import MentorLogin from './components/MentorLogin';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import NotesPage from './NotesPage';
import './App.css';



function App() {
  return (
    <div className="App">
       <Router>
        <div className="App">
          <Navbar /> 
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Mentor" element={<MentorLogin />} />
           <Route path="/registration" element={<Registration />} />
           <Route path="/NotesPage" element={<NotesPage/>} />
           
           
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router> 
      
    </div>
  );
}

export default App;
