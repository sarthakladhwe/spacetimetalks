import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(false)

  function userOnChange(event) {
    setUser(prevUser => (
      {
        ...prevUser,
        [event.target.name]: event.target.value
      }
    ))
  }

  console.log(user);

  async function registerUser(event) {
    event.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password
      });
      res.data && window.location.replace("/login");
    } catch(err) {
      console.log(err);
      setError(true)
    }
  }

  return (
    <div className='register'>
        <span className='register-title'>Register</span>
        <form className='register-form' onSubmit={registerUser}>
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
            <button className='register-register' type='submit'>
                Register
            </button> 
        </form>
        <button className='login-button'>
          <Link className='link' to="/login">
            I'll login
          </Link>
        </button>
        {
          error &&
          <span style={{color: "red", marginTop: "10px"}}>Something went wrong!</span>
        }
    </div>
  )
}
