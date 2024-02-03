import React from 'react'
import './Explore.css'
import Carousel from './Carousel'
function Explore() {
  return (
    <div className='ex'>
      <div className="headings">
        <div className="head1">
            Popular Destinations
        </div>
        <hr></hr>
        <div className="head2">
            Most popular destinations around the world,from historical places to natural wonders.
        </div>
      </div>
      <Carousel></Carousel>
    </div>
  )
}

export default Explore
