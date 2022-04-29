import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <span className='login-title'>Login</span>
        <form className='login-form'>
            <label>Email</label>
            <input type="email" className='login-input' placeholder='Enter Email' />
            <label>Password</label>
            <input type="password" className='login-input' placeholder='Enter Password' />
            <button className='login-button'>
              <Link className='link' to="/login">
                Login
              </Link>
            </button>
            <button className='login-register'>
              <Link className='link' to="/register">
                I'll Register
              </Link>
            </button>
        </form>
    </div>
  )
}
