// src/components/Registration.js
import React, { useState } from 'react';
import './Registration.css'; // Import the external CSS file for styling

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegistration = () => {
    // Perform password matching validation
    if (password !== rePassword) {
      setPasswordMatchError(true);
      return;
    }

    // Implement your registration logic here
    // Store user data or perform registration actions
    console.log('Registration successful:', username, email);
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Registration</h2>
      <form className="registration-form">
        <div className="form-group">
          <label className="form-label">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Re-enter Password: </label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className="form-input"
          />
          {/* {passwordMatchError && (
            <p className="error-message">Passwords do not match.</p>
          )} */}
        </div>
        <button
          type="button"
          onClick={handleRegistration}
          className="registration-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
