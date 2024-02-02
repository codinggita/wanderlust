import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Navbar from './Navbar'; 
// import Book from './Book';
import Explore from './Explore';
import Blog from './Blog';
import Pricing from './Pricing';
import Travel from './Travel';
import Login from './Login';
import Signup from './Signup';
import {Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    {/* <Home></Home> */}
<Routes>
  <Route path='/home' exact element={<Home/>}/>
  <Route path="/explore" element={<Explore/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/logins" element={<Login/>}/>
  <Route path="/signups" element={<Signup/>}/>
</Routes>
    </>
    
  );
}

export default App;
