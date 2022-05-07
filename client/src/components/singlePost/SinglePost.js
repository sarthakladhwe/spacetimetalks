import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import './singlePost.css'
import post from '../post/Post';
import { Context } from '../../context/Context'

export default function SinglePost() {

    const {userDetails} = React.useContext(Context);
    const location = useLocation();
    const publicFolder = "http://localhost:5000/images/"
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
            {
                singlePost.image &&
                <img 
                    className='single-post-image'
                    src={publicFolder + singlePost.image} 
                    alt=''
                />
            }
            <h1 className='single-post-title'>{singlePost.title}</h1>
            {
                singlePost.username === userDetails.username &&
                <div className='single-post-edit'>
                    <i className="single-post-icon fa-regular fa-pen-to-square"></i>
                    <i className="single-post-icon fa-regular fa-trash-can"></i>
                </div>
            }
            <div className='single-post-info'>
                <span className='single-post-author'>
                    Author:   
                    <Link to={`/?user=${singlePost.username}`} className="link">
                        <b>{singlePost.username}</b>
                    </Link>
                </span>
                <span className='single-post-date'>{timeStamp}</span>
            </div>
            <p className='single-post-description'>
                {singlePost.description}
            </p>
        </div>
    </div>
  )
}
