import React from 'react'
import Vector from './Images/Vector.png'

function Signup(props) {
    
    const [form, setForm] = React.useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
  function handleClick(e){
        const {value, name}=e.target
        setForm(prevForm=>{
           return {
               ...prevForm,
               [name]:value
              
           }
        })
        
  }

  function submitSignUp(e){
      e.preventDefault()
      sessionStorage.setItem('form', JSON.stringify(form))
        window.location="/"  
          
  }
  


    return (
    <div>
        <div className='container signup'>
            <div className='logo-header p-4 justify-content-center'>
                        <div className='logo-img'>
                            <img src={Vector} alt='logo'/>
                        </div>
                        <div className='signup-logo-text text-blue-500'>Airy Travels</div>
            </div>
           
            <p className='create-account mb-4'>Create an Airy Account</p>
            <form>
                
                <input 
                type='text' 
                name='firstName' 
                onChange={handleClick}
                value={form.firstName}
                required="required"
                placeholder='First Name' className='form-input px-2 py-1   rounded mr-5 w-2/5'/>

                <input 
                type='text' 
                name='lastName' 
                onChange={handleClick}
                value={form.lastName}
                required
                placeholder='Last Name' className='form-input px-2 py-1 md:ml-5 rounded  w-2/5'/>

                
                <input 
                type='email' 
                name='email' 
                onChange={handleClick}
                value={form.email}
                required="required"
                placeholder='Email' className='form-input px-2 py-1 my-4 rounded block w-full'/>
                
                           
                
                <input 
                type='password' 
                name='password' 
                onChange={handleClick}
                value={form.password}
                id="password"
                required
                placeholder='Enter Password' className='form-input px-2 py-1 rounded block my-4 w-full' />


               

                <button className='login-submit mt-4 w-full' onClick={submitSignUp}>SIGN UP</button>                

            </form>
        </div>
    </div>
  )
}

export default Signup