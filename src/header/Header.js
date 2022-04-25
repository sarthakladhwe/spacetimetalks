import React from 'react'
import './header.css'
import heroImage from '../assets/SpaceTimeTalks-Hero.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-titles'>
            <span className='header-title-small'>Space Time Talks</span>
            <span className='header-title-large'>Blog</span>
        </div>
        <img className='hero-image' src={heroImage} alt='hero' />
    </div>
  )
}
