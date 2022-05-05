import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context'

export default function Login() {

  const [userLoginDetails, setUserLoginDetails] = React.useState({
    username: "",
    password: ""
  })

  const {userDetails, loginWithDetails, error} = React.useContext(Context);

  function onDetailsChange(event) {
    setUserLoginDetails(prevDetails => ({
      ...prevDetails,
      [event.target.name]: event.target.value
    }))
  }

  function onLoginSubmit(e) {
    e.preventDefault();
    console.log(userLoginDetails);
    loginWithDetails(userLoginDetails);
  }

  return (
    <div className='login'>
        <span className='login-title'>Login</span>
        <form className='login-form' onSubmit={onLoginSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              onChange={onDetailsChange}
              value={userLoginDetails.username}
              className='login-input' 
              placeholder='Enter Username' />
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              onChange={onDetailsChange}
              value={userLoginDetails.password}
              className='login-input' 
              placeholder='Enter Password' />
            <button className='login-button' type='submit'>
                Login
            </button>
        </form>
        <button className='login-register'>
          <Link className='link' to="/register">
            I'll Register
          </Link>
        </button>
        {
          error.error &&
          <span style={{color: "red", marginTop: "10px"}}>{error.errorMessage}</span>
        }
    </div>
  )
}
