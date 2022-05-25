import React from 'react'
import './style.css'
import '../Bootstrap/bootstrap.css'
import Book from './Book';
import Header from '../Images/headerimg.jpg'
import Nike from '../Images/Group.png'
import Star from '../Images/silver-star-1-logo.png'
import Intrax from '../Images/intrax-logo.png'
import Master from '../Images/mastercard-2-logo.png'
import Apple from '../Images/apple-pay-logo.png'
import Body from './body';
import Logo from '../Images/Vector.png'
import * as Icon from 'react-bootstrap-icons';


function Home() {
    const styles = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%), url(${Header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }




function handleClicks(){
    document.querySelector('.menubar').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}
 function closeOverlay(){
    document.querySelector('.menubar').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
 }


    return (
    <div>



        
        <div className='header'>
            <div style={styles}
            className='header-img w-full'>

                {/* Header for small screens */}
                <div className="md:flex md:flex-row " id="myTopnav">
                    
                    <button className="icon sm:hidden" onClick={handleClicks}>&#9776;</button>
                    <div className='menubar hidden sm:hidden'>
                           <div className='topnav-element'>
                        <div className='logo-header '>
                        <div className='logo-img'>
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className='logo-text'>Airy Travels</div>
                        </div>
                    </div>
                    <div className='topnav-element'>
                        <a href={'#about'} className='nav-item'>About Us</a>
                        <a href={'#support'} className='nav-item'>Support</a>
                        <a href={'#FAQ'} className='nav-item'>FAQ</a>
                    </div>
                    <div className='topnav-element'>
                        <div className='sign-up ml-12'>Sign In</div>
                    </div>
                        


                        <button className='close-modal' onClick={closeOverlay}>&#9776;</button>
                    </div>
                    <div className='overlay hidden sm:hidden'></div>
                </div>

            {/* Header for wider screens */}
                <div className='flex'>
                    <div className='logo-header p-4 shrink-0'>
                        <div className='logo-img'>
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className='logo-text'>Airy Travels</div>
                    </div>

                    
                    <div className='navigation p-4  sm:flex sm:w-full '>
                        <div className='sm:inline-flex  sm:w-4/5 justify-content-center'>
                        <a href={'#about'} className='nav-item'>About Us</a>
                        <a href={'#support'} className='nav-item'>Support</a>
                        <a href={'#FAQ'} className='nav-item'>FAQ</a>
                    </div>
                    <div className='sm:w-1/5 '>
                        <div className='sign-up'>Sign In</div>
                    </div>


                    </div>
                </div>
 
                <div className='header-info'>
                                <h3 className='header-info-h3'>Plan The Perfect Winter Trip</h3>
                                <p className='header-info-p '>Easily plan your ideal ski trip from home with the help of professionals</p>
                </div>
</div>
                <Book/>
            <div className='container flex flex-row mt-3'>
                <div className='basis-1/5 pr-3'>
                <img src={Nike} alt = "Nike-logo"/>
                </div>
                <div className='basis-1/5 pr-3'>
                <img src={Apple} alt = "Apple-logo"/>
                </div>
                <div className='basis-1/5 pr-3'>
                <img src={Star} alt = "star-logo"/>
                </div>
                <div className='basis-1/5 pr-3'>
                <img src={Intrax} alt = "Intrax-logo"/>
                </div>
                <div className='basis-1/5 pr-3 pl-3'>
                <img src={Master} alt = "MasterCard-logo"/>
                </div>
            </div>

                
                
            </div>
            <Body/>
        </div>
  )
}


export default Home