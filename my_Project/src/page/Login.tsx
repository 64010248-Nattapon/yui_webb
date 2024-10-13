import React, { useState } from 'react';
import './Login.css';
import Loginimage from '../images/testLoinImage.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('เข้าสู่ระบบสำเร็จ');
    } else {
      alert('ข้อมูลไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>GOLD-TIN</h1>
        <div className="login-input-group">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
      <div className="image">
        <img src={Loginimage} alt="image" />
      </div>
    </div>
  );
};

export default Login;
