import React from 'react'
import {Link,NavLink,Outlet} from "react-router-dom";
import './Topbar.css'

function Topbar() {
  return (
    <div className='topbars'>
      <div className="topnav1">
        <Link to='/home'>Home</Link>
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/travel'>Travel</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
      </div>
    </div>
  )
}

export default Topbar
