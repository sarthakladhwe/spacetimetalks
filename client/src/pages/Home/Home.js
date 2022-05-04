import {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import './home.css'

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'

export default function Home() {

  const [posts, setPosts] = useState([])
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts${search}`);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]) 

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
