import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Navbar from './Navbar'; 
import Book from './Book';
import Explore from './Explore';
import Blog from './Blog';
import Pricing from './Pricing';
import Travel from './Travel';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
<Home/>
<Book/>
<Routes>

  <Route path="/explore" element={<Explore/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/logins" element={<Login/>}/>
  <Route path="/signups" element={<Signup/>}/>
</Routes>
</BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
