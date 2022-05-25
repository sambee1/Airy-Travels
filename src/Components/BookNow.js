import React from 'react'
import './Home/style.css'

function BookNow(props) {
  return (
    <div>
        <div className='container book-now'>
            <p className='book-now-title'>{props.title}</p>
            <p className='book-now-location'>{props.location}</p>
            <button className='book-now-button'>Book Now</button>
        </div>
    </div>
  )
}

export default BookNow