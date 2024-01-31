import React from 'react'
import './Book.css'
import logos from "./right-arrow.png"

function Book() {
  return (
    <div className='book'>
      <div className="book1">
      <div className="destination">
        <p className="name">
            DESTINATION
        </p>
        <input placeholder='Dubai' type='text'></input>
      </div>
      
      <div className="destination">
        <p className="name">
            PERSON
        </p>
        <input type='number' placeholder='2' min='1'></input>
      </div>



      <div className="destination">
        <p className="name">
            CHECK IN
        </p>
       <input type="date"></input>
      </div>


      <div className="destination">
        <p className="name">
            CHECK OUT
        </p>
        <input type='date'></input>
      </div>
      
      </div>
      
      <div className="now">
          <p className="bnow">
              <p>Book</p>
              <p>Now</p>
          </p>
          <img src={logos}></img>
      </div>
    </div>
  )
}

export default Book
