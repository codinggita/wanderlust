import React from 'react'
import './Home.css' 
import lo from './travel1.png'
import Navbar from './Navbar'
import Book from './Book'

function Home() {
  return (
    <>
    <div className='body'>
   
      <Navbar></Navbar>
     <div className="content">
        <p>Start your unforgettable </p>
        <p>
        journey with us.
        </p>
        <div className='conten2'>The best travel for your journey begins now</div>
     </div>
     <Book></Book>
    </div>
    </>
  )
}

export default Home
