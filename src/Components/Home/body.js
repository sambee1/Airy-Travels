import React from 'react'
import ski from '../Images/pic1.jpg'
import resort from '../Images/picture-2.jpg'
import passes from '../Images/section5.jpg'
import Vector from '../Images/Vector.png'
import Fuji from '../Images/fuji.jpg'
import Skate from '../Images/skate.jpg'
import Palm from '../Images/picture33.jpg'
import Property from '../Images/Property.jpg'
import Snow from '../Images/picture.jpg'
import * as Icon from 'react-bootstrap-icons';
import BookNow from '../BookNow'
import './style.css'

function body() {
  return (
    <div>
        <section className='section-2'>
                <p className='section-2-one'>Creating the best<span className='section-text'> ice-cold</span> experience that you would never forget.</p>
                <p className='section-2-two'>Would you explore paradise in the world, find the best destination in the world with us.</p>
            
                <p className='section-2-three '>View Regions available</p>

        </section>

        <section className='section-3'>
            <div className='w-full grid md:grid-cols-3 sm:grid-cols-3'>
                <div className='section-3-img'>
                    <p className='section-3-text'>Mountain Resort</p>
                    <img src={Fuji} alt='trip'/>
                </div>
                <div className='section-3-img'>
                    <p className='section-3-text'>Fuji Mountain</p>
                    <img src={Skate} alt='trip'/>
                </div>
                <div className='section-3-img'>
                    <p className='section-3-text'>Freezing LightLake</p>
                    <img src={ski} alt='trip'/>
                </div>
            </div>
        </section>

        <section className='section-4 container mt-5 mb-5'>
            <div className='columns-1 md:columns-2'>
                <div>
                    <p className='section-4-text'>The best resorts to chill and  relax</p>
                </div>
                <div className='mb-3  book-now-img'>
                    <BookNow
                    title='Palm Beach'
                    location='Barbados'
                    />
                    <img src={Palm} alt = 'resort' />
                </div>
                <div className='mb-3 book-now-img'>
                    <BookNow
                    title='Winter landscape Chalet'
                    location='Cambodia'
                    />
                    <img src={Property} alt = 'resort' />
                </div>
                <div className='mb-3 book-now-img'>
                <BookNow
                    title='Sea Resort'
                    location='Miami'
                    />
                    <img src={resort} alt = 'resort' />
                </div>
                <div className='mb-3 book-now-img'>
                <BookNow
                    title='Ski Resort'
                    location='Japan'
                    />
                    <img src={Snow} alt = 'resort'/>
                </div>
            </div>   
        </section>

        <section className='section-5 '>
            <img src={passes} alt='passes' className='w-full'/>
            
            <div className='passes-text md:text-4xl text-2xl top-8 left-8 md:top-28 md:left-28 w-80 md:w-96' >
                <p>
                View Passes We've Made Available For You
                </p>
            
            <button className='button-passes  ml-6'> View Passes</button>
            </div>
        </section>

        <section className='mt-3'>
            <div className='container section-6 md:flex md:flex-row'>
                <div className='section-6-one basis-1/3 mb-5'>
                    <div className='logo'>
                        <img src={Vector} alt="logo" className=''/>
                    </div>
                    <p className='section-6-title'>Airy Travels</p>
                    <p className='section-6-info'>Book your trip in minutes, get full control for much longer.</p>
                    <div className='section-6-icon'>
                       <Icon.Facebook></Icon.Facebook>
                    </div>
                    <div className='section-6-icon'>   
                    <Icon.Instagram></Icon.Instagram>
                   </div>
                    <div className='section-6-icon'>
                        <Icon.Twitter></Icon.Twitter>
                    </div>
                    
                    
                </div>

                <div className='section-6-two basis-2/3'>
                <div className='  flex flex-row'>
                    <div className='contact basis-1/3'>
                        <p className='head'>COMPANY</p>
                        <div className='footer-info'>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                        </div>
                    </div>
                    <div className='contact basis-1/3'>
                        <p className='head'>CONTACT</p>
                        <div className='footer-info'>
                        <p>FAQ</p>
                        <p>Press</p>
                        <p>Affiliates</p>
                        </div>
                    </div>
                    <div className='contact basis-1/3'>
                        <p className='head'>MORE</p>
                        <div className='footer-info'>
                        <p>Airlines</p>
                        <p>Airfees</p>
                        <p>Lowfare Tips</p>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-row md:mt-7'>
                    <div className='footer-text basis-1/1 md:basis-1/3 mr-4 md:mr-0'>
                    © 2022 Airy Travels - All right reserved.
                    </div>
                    <div className='footer-text basis-1/1 md:basis-1/3 mr-4 md:mr-0'>
                        Privacy Policy
                    </div>
                    <div className='footer-text basis-1/1 md:basis-1/3'>
                    Terms of Use
                    </div>

                </div>
            </div>
            </div>

        </section>

    </div>
  )
}

export default body