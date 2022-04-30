import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './singlePost.css'
import post from '../post/Post';

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [singlePost, setSinglePost] = useState({});
    const timeStamp = new Date(singlePost.createdAt).toDateString();

    useEffect(() => {
        const getSinglePost = async () => {
            const res = await axios.get(`/posts/${path}`);
            setSinglePost(res.data)
        }
        getSinglePost()
    }, [path])

  return (
    <div className='single-post'>
        <div className='single-post-wrapper'>
            <img 
                className='single-post-image'
                src='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg' 
                alt=''
            />
            <h1 className='single-post-title'>{singlePost.title}</h1>
            <div className='single-post-edit'>
                <i className="single-post-icon fa-regular fa-pen-to-square"></i>
                <i className="single-post-icon fa-regular fa-trash-can"></i>
            </div>
            <div className='single-post-info'>
                <span className='single-post-author'>Author: <b>{singlePost.username}</b></span>
                <span className='single-post-date'>{timeStamp}</span>
            </div>
            <p className='single-post-description'>
                {singlePost.description}
            </p>
        </div>
    </div>
  )
}
