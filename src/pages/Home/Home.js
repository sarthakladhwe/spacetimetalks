import React from 'react'
import './home.css'

import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Posts from '../../posts/Posts'

export default function Home() {
  return (
    <div className='home'>
        <Header />
        <div className='home-container'>
          <Posts />
          <Sidebar />
        </div>
    </div>
  )
}
