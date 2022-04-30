import React from 'react'
import './posts.css'
import Post from '../post/Post'

export default function Posts({ posts }) {

  const allPosts = posts.map(post => (
    <Post post={post} />
  ))

  return (
    <div className='posts'>
      {allPosts}
    </div>
  )
}
