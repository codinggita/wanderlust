import React from 'react'
import './Navbar.css'
import {Link,NavLink,Outlet} from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className="topnav">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/explore'>Explore</NavLink>
        <Link to='/travel'>Travel</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/pricing'>Pricing</Link>
      </div>
      <div className="buttons">
        <Link className="login" to='/logins'>Login</Link>
        <Link className="signup" to='/signups'>Signup</Link>
      </div>
    </div>
    <Outlet/>
    </>
  

    
  )
}

export default Navbar
