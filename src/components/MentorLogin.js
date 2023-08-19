// // src/components/MentorLogin.js
// import React, { useState } from 'react';
// import './MentorLogin.css'; // Import the CSS file for styling

// const MentorLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement your login logic here
//     // Check username and password
//     if (username === 'mentor' && password === 'mentorpassword') {
//       alert('Mentor logged in successfully');
//       // Redirect or perform actions after successful login
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="mentor-login-container">
//       <h2>Mentor Login</h2>
//       <form className="login-form">
//         <div className="form-group">
//           <label>Username: </label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Password: </label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button className="login-button" type="button" onClick={handleLogin} >Login</button>
//       </form>
//     </div>
//   );
// };

// export default MentorLogin;


//------------------------- click logine redirect Notepage-----------------------------------

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useNavigator } from "react-router-dom";
import './MentorLogin.css';

const MentorLogin = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // Check username and password
    if (username === 'mentor' && password === 'mentorpassword') {
      alert('Mentor logged in successfully');
      // Redirect to /NotesPage after successful login
      history.push('/NotesPage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="mentor-login-container">
      <h2>Mentor Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-button" type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default MentorLogin;
