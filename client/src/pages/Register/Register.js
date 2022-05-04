import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  function userOnChange(event) {
    setUser(prevUser => (
      {
        ...prevUser,
        [event.target.name]: event.target.value
      }
    ))
  }

  console.log(user);

  return (
    <div className='register'>
        <span className='register-title'>Register</span>
        <form className='register-form'>
            <label>Username</label>
            <input 
              type="text" 
              name='username' 
              value={user.username}
              onChange={userOnChange}
              className='register-input' 
              placeholder='Enter Username'
            />
            <label>Email</label>
            <input 
              type="email" 
              name='email' 
              value={user.email}
              onChange={userOnChange}
              className='register-input' 
              placeholder='Enter Email' 
            />
            <label>Password</label>
            <input 
              type="password" 
              name='password' 
              value={user.password}
              onChange={userOnChange}
              className='register-input' 
              placeholder='Enter Password' 
            />
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
