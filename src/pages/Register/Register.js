import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className='register-title'>Register</span>
        <form className='register-form'>
            <label>Username</label>
            <input type="text" className='register-input' placeholder='Enter Username' />
            <label>Email</label>
            <input type="email" className='register-input' placeholder='Enter Email' />
            <label>Password</label>
            <input type="password" className='register-input' placeholder='Enter Password' />
            <button className='register-register'>Register</button>
            <button className='login-button'>I'll Login</button>
        </form>
    </div>
  )
}
