import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'

export default function post({ post }) {

  const timeStamp = new Date(post.createdAt).toDateString();
  const postCategories = post.categories.map(cat => (
    <span className='post-category'>
        <Link className='link' to={`/?cat=${cat}`}>
            {cat}
        </Link>
    </span>
  ))

  return (
    <div className='post'>
        <img 
            className='post-image'
            src='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg'
            alt=''
        />
        <div className='post-info'>
            <div className='post-categories'>
                {postCategories}
            </div>
            <Link className="link" to={`/post/${post._id}`}>
                <span className='post-title'>
                    {post.title}
                </span>
            </Link>
            <hr/>
            <span className='post-date'>{timeStamp}</span>
        </div>
        <p className='post-description'>
            {post.description}
        </p>
    </div>
  )
}
