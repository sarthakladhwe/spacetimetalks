import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className='login-title'>Login</span>
        <form className='login-form'>
            <label>Email</label>
            <input type="email" className='login-input' placeholder='Enter Email' />
            <label>Password</label>
            <input type="password" className='login-input' placeholder='Enter Password' />
            <button className='login-button'>Login</button>
            <button className='login-register'>Register</button>
        </form>
    </div>
  )
}
