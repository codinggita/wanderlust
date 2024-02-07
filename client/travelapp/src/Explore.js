import React from 'react'
import './Explore.css'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Topbar from './Topbar'

function Explore() {
  return (
    <div className='ex'>
      <Topbar></Topbar>
      <div className="headings">
        <div className="head1">
            Popular Destinations
        </div>
        <hr></hr>
        <div className="head2">
            Most popular destinations around the world,from historical places to natural wonders.
        </div>
      </div>
      <div className="cs">
      <Carousel></Carousel>
      </div>
      
    </div>
  )
}

export default Explore
