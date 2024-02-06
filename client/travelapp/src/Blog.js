import React from 'react'
import Blogslider from './Blogslider'
import './Blog.css'

function Blog() {
  return (
    <div className='colors'>
      <div className="nameh">
        <div className="heading1">
          Our Blog
        </div>
        <hr className='hrs'></hr>
        <div className="heading2">
        An insight the credible experience in the world.
        </div>
      </div>
     <div className="blogslider"><Blogslider></Blogslider></div>
    </div>
  )
}

export default Blog
