import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Navbar from './Navbar'; 
import Book from './Book';
import Topbar from './Topbar';
import Carousel from './Carousel';
import Explore from './Explore';
import Blog from './Blog';
import Pricing from './Pricing';
import LoginForm from './LoginForm';
import Travel from './Travel';
import Blogslider from './Blogslider';
import {Routes,Route } from 'react-router-dom';
import Excomponent from './Excomponent';
import SignupForm from './SignupForm'
// import BookingForm from './BookingForm';
// import BookingDetails from './BookingDetails';

function App() {
  return (
    <>
 
<Routes>
  <Route path='/' exact element={<Home/>}/>

  <Route path='/home' exact element={<Home/>}/>
  <Route path="/explore" element={<Explore/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/loginform" element={<LoginForm/>}/>
  <Route path="/signupform" element={<SignupForm/>}/>
 
</Routes> 

    </>
    
  );
}

export default App;
