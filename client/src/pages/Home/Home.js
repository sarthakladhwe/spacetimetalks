import {useEffect, useState, React} from 'react'
import { axiosInstance } from '../../config'
import { useLocation } from 'react-router'
import { nanoid } from 'nanoid'

import './home.css' 
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'

import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function Home() {
  //revert commit change
  const [posts, setPosts] = useState([])
  const {search} = useLocation();

  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get(`/posts${search}`);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])

  return (
    <div className='home'>
        <Header />
        <div className='home-container'>
          <Posts key={nanoid()} posts={posts} />
          {
            width > 675 && <Sidebar key={nanoid()} />
          }
        </div>
    </div>
  )
}
