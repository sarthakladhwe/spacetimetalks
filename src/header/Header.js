import React from 'react'
import './header.css'
import heroImage from '../assets/SpaceTimeTalks-Hero.jpg'
import logoImage from '../assets/STTWebsiteWhiteLogo.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-titles'>
            <img className='logo-image' src={logoImage} alt='logo' />
            <span className='header-title-large'>Blog</span>
        </div>
        <img className='hero-image' src={heroImage} alt='hero' />
    </div>
  )
}
