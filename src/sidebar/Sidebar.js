import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT ME</span>
            <img src='https://www.pexels.com/photo/blue-and-white-planet-display-87009/' alt='' />
            <p>
                Lorem sasfasfafssss
                asfasfasf
                asfasfasfasf
            </p>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>CATEGORIES</span>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>Sound of Space</li>
                <li className='sidebar-list-item'>Hubble Top 100</li>
                <li className='sidebar-list-item'>Videos</li>
            </ul>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>FOLLOW US</span>
            <div className='sidebr-social'>
                <i className="sidebar-icon fa-brands fa-instagram"></i>
                <i className="sidebar-icon fa-brands fa-youtube"></i>
                <i className="sidebar-icon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}
