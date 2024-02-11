import React from 'react'
import './Navbar.css'
import {Link,NavLink,Outlet} from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className="topnav">
        <Link to='/home'>Home</Link>
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/travel'>Travel</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
      </div>
      <div className="buttons">
        <NavLink className="login" to='/loginform'>Login</NavLink>
        <NavLink className="signup" to='/signupform'>Signup</NavLink>
      </div>
    </div>
    <Outlet/>
    </>
  

    
  )
}

export default Navbar
