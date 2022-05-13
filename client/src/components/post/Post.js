import React from 'react'
import './post.css'
import postDefaultImage from '../../assets/STTChannelArt.jpg'
import { Link } from 'react-router-dom'

export default function post({ post }) {

  const timeStamp = new Date(post.createdAt).toDateString();
  const publicFolder = "http://localhost:5000/images/"
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
            src={post.image ? publicFolder + post.image : postDefaultImage}
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
