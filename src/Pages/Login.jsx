import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'; 
import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Successfully logged in');
      navigate('/RoomsList'); 
    } catch (error) {
      alert('Failed to login: ' + error.message);
    }

    console.log('Login:', { email, password });
  };

  const handleReset = () => {
    navigate('/reset');
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <Link to={"/reset"} className='link-classname'><p onClick={handleReset}>Forgot Password?</p></Link>
        <button type="submit" className="login-button">Login</button>
        <Link to={"/signup"} className='link-classname'>Don't have an account? Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
