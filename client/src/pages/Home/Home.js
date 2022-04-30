import {useEffect, useState} from 'react'
import axios from 'axios'
import './home.css'

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts();
  }, [])

  return (
    <div className='home'>
        <Header />
        <div className='home-container'>
          <Posts posts={posts} />
          <Sidebar />
        </div>
    </div>
  )
}
