import React from 'react'

function Login() {
  return (
    <div>
        <div className='container login'>
            <h3>Airy Travels</h3>
            <p>Welcome</p>
            <p>Log in to continue</p>
            <form>
                <input type='email' placeholder='Email address'/>
                <input type='password' placeholder='Password'/>
                <button>Log In</button>
            </form>
            <p>Don't have an account?Sign up</p>
        </div>

        
    </div>
  )
}

export default Login