import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../Bootstrap/bootstrap.css'
import Trip from '../Images/book.png'


function Book() {
  return (
    <div>
         {/* <div className='book-trip flex flex-col md:flex-row md:-mt-12 -mt-12 container'>
             
             <div className='md:basis-1/5'>
                 <span className='location-icon '>
                   <Icon.GeoAlt></Icon.GeoAlt></span>
                   <span className='location bold book-trip-text'>LOCATION</span>
             <p className='book-trip-select'>
                 <select name='location'>
                    <option>Iceland</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Ukraine</option>
                </select>
                 </p>
             </div>

             <div className='md:basis-1/5'>
                 <span className='person-icon '>
                   <Icon.Person></Icon.Person></span>
                   <span className='location bold book-trip-text'>PERSONS</span>
             <p className='book-trip-select'>
             <select name='persons'>
                <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>3 Persons</option>
                    <option>4 Persons</option>
                    <option>5 Persons</option>
                </select>
                 </p>
             </div>

             <div className='md:basis-1/5'>
                 <span className='calendar-icon '>
                   <Icon.Calendar></Icon.Calendar></span>
                   <span className=' book-trip-text'>CHECK IN</span>
             <p className='book-trip-select'>
             
             <input type='date' name='check-in'>
             </input>
                 </p>
             </div>

             <div className='md:basis-1/5'>
                 <span className='calendar-icon '>
                   <Icon.Calendar></Icon.Calendar></span>
                   <span className=' book-trip-text'>CHECK OUT</span>
             <p className='book-trip-select'>
             
             <input type='date' name='check-out'>
             </input>
                 </p>
             </div>

             <div className='md:basis-1/5 md:place-content-center place-self-center'>
             <button className='book-trip-button '>
                <span>Book Trip <Icon.ArrowUpRight></Icon.ArrowUpRight></span>
             </button>
             </div>
         </div> */}
         
         <div className='container book-trip md:flex md:flex-row md:-mt-12'>
            
            <div className=' flex-initial md:basis-1/5'>
                 <span className='location-icon '>
                   <Icon.GeoAlt></Icon.GeoAlt></span>
                   <span className='location bold book-trip-text'>LOCATION</span>
             <p className='book-trip-select'>
                 <select name='location'>
                    <option>Iceland</option>
                    <option>Germany</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Ukraine</option>
                </select>
                 </p>
             </div>

             <div className=' md:basis-1/5'>
                 <span className='person-icon '>
                   <Icon.Person></Icon.Person></span>
                   <span className='location bold book-trip-text'>PERSONS</span>
             <p className='book-trip-select'>
             <select name='persons'>
                <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>3 Persons</option>
                    <option>4 Persons</option>
                    <option>5 Persons</option>
                </select>
                 </p>
             </div>
             <div className=' md:basis-1/5'>
                 <span className='calendar-icon '>
                   <Icon.Calendar></Icon.Calendar></span>
                   <span className=' book-trip-text'>CHECK IN</span>
             <p className='book-trip-select'>
             
             <input type='date' name='check-in'>
             </input>
                 </p>
             </div>

             <div className=' md:basis-1/5 '>
                 <span className='calendar-icon '>
                   <Icon.Calendar></Icon.Calendar></span>
                   <span className=' book-trip-text'>CHECK OUT</span>
             <p className='book-trip-select'>
             
             <input type='date' name='check-out'>
             </input>
                 </p>
             </div>

             <div className=' md:basis-1/5 md:place-content-center md:justify-content-center m-auto'>
             <div >
               <button className='book-trip-button '>
               <div className='book-text'>Book Trip <span><img src={Trip} alt='trip' className='book-img'/></span></div>
          
              </button>
             </div>
                
             </div>

         </div>

         
         
         
                
                
                
    </div>
  )
}

export default Book