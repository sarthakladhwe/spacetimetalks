import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

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
            <button className='register-register'>
              <Link className='link' to="/register">
                Register
              </Link>
            </button>
            <button className='login-button'>
              <Link className='link' to="/login">
                I'll login
              </Link>
            </button>
        </form>
    </div>
  )
}
