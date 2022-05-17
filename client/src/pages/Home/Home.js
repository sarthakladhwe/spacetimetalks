import {useEffect, useState, React} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { nanoid } from 'nanoid'

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
          <Posts key={nanoid()} posts={posts} />
          <Sidebar key={nanoid()} />
        </div>
    </div>
  )
}
