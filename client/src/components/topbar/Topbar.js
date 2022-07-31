import React from 'react'
import './topbar.css'
import { Context } from '../../context/Context';

import { Link } from 'react-router-dom'

export default function Topbar() {

  const {userDetails, logoutUser, isLoggedIn} = React.useContext(Context);
    
  return (
    <div className='topbar'>
        <div className='top-left'>
            <a href='https://www.instagram.com/spacetimetalks/' target="_blank">
                <i className="top-icon fa-brands fa-instagram"></i>
            </a>
            <a href='https://www.youtube.com/channel/UCzfAjmg89wlMtIz-LJZW4qA' target="_blank">
                <i className="top-icon fa-brands fa-youtube"></i>
            </a>
            <a href='https://twitter.com/spacetime_talks' target="_blank">
                <i className="top-icon fa-brands fa-twitter"></i>
            </a>
        </div>
        <div className='top-center'>
            <ul className='menu-list'>
                <Link className='link' to="/">
                    <li className='menu-list-item'>HOME</li>
                </Link>
                <Link className='link' to="/write">
                    <li className='menu-list-item'>WRITE</li>
                </Link>
                <Link className='link' to="/about">
                    <li className='menu-list-item'>ABOUT</li>
                </Link>
                <Link className='link' to="/contact">
                    <li className='menu-list-item'>CONTACT</li>
                </Link>
                {
                    isLoggedIn &&
                    <li className='menu-list-item' onClick={logoutUser}>LOGOUT</li>
                }    
            </ul>
        </div>
        <div className='top-right'>
            {
                isLoggedIn ? (
                    <Link className='link' to="/settings">
                        {
                            userDetails.profilePicture ?
                            <img 
                                src={userDetails.profilePicture} 
                                className='profile-image' 
                                alt='' 
                            /> :
                            <i className="top-icon fa-solid fa-user-astronaut"></i>
                        }
                    </Link>
                ) : (
                    <ul className='menu-list'>
                        <Link className='link' to="/login">
                            <li className='menu-list-item'>LOGIN</li>
                        </Link>
                        <Link className='link' to="/register">
                            <li className='menu-list-item'>REGISTER</li>
                        </Link>
                    </ul> 
                )
            }
            {/* <i className="top-search fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}
