import React from 'react'
import './topbar.css'

import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='top-left'>
            <i className="top-icon fa-brands fa-instagram"></i>
            <i className="top-icon fa-brands fa-youtube"></i>
            <i className="top-icon fa-brands fa-twitter"></i>
        </div>
        <div className='top-center'>
            <ul className='menu-list'>
                <Link to="/">
                    <li className='menu-list-item'>HOME</li>
                </Link>
                <Link to="/write">
                    <li className='menu-list-item'>WRITE</li>
                </Link>
                
                <li className='menu-list-item'>ABOUT</li>
                
                <li className='menu-list-item'>CONTACT</li>
                <li className='menu-list-item'>LOGOUT</li>
            </ul>
        </div>
        <div className='top-right'>
            <Link to="/settings">
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQEk3saQzwZMEw/profile-displayphoto-shrink_800_800/0/1583911954522?e=1656547200&v=beta&t=eumbJSoMV76Bx3RFd5EC7PBCuHJQGGjp7zM1zzJqv3U' className='profile-image' alt='' />
            </Link>
            <i className="top-search fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
