
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'
import {Link,NavLink,Outlet} from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:12000/login', { username, password });
      alert(response.data.message);
      // You can redirect the user to another page upon successful login
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <div className='alllogin'>
       <div className='all'>
      <h2 className='log'>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label>Username:</label>
          <input type="text" className='loginssss' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className='form'>
          <label>Password:</label>
          <input className='loginssss' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
      <div className='tosignup'>You don't have an account ? <NavLink className='sign' to='/signupform'>Signup</NavLink> </div>
    </div>
    <Outlet/>
    </div>
   
  );
};

export default LoginForm;
