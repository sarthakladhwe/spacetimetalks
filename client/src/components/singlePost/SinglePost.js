import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import './singlePost.css'
import post from '../post/Post';
import { Context } from '../../context/Context'

export default function SinglePost() {

    const {userDetails} = React.useContext(Context);
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const publicFolder = "http://localhost:5000/images/";
    const [singlePost, setSinglePost] = useState({});
    const timeStamp = new Date(singlePost.createdAt).toDateString();

    const [updateMode, setUpdateMode] = useState(false);
    const [editPost, setEditPost] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        const getSinglePost = async () => {
            const res = await axios.get(`/posts/${path}`);
            setSinglePost(res.data);
            setEditPost({
                title: res.data.title,
                description: res.data.description
            })
        }
        console.log("Single post useeffect")
        getSinglePost()
    }, [path])

    function handleUpdatePost() {
        setUpdateMode(true)
    }

    async function handlePostDelete() {
        try {
            await axios.delete(`/posts/${singlePost._id}`, {data: {username: singlePost.username}});
            window.location.replace("/")
        } catch(err) {
            console.log(err)
        }
    }

    function onUpdatePostChange(e) {
        setEditPost(prevPost => (
            {
                ...prevPost,
                [e.target.name]: e.target.value
            }
        ))
    }

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
            {
                updateMode ?
                <input 
                    type="text"
                    name="title"
                    value={singlePost.title} 
                    onChange={onUpdatePostChange}
                    className="single-post-title-input" 
                    autoFocus
                /> :
                (
                    <h1 className='single-post-title'>
                        {editPost.title}
                        {
                            singlePost.username === userDetails?.username &&
                            <div className='single-post-edit'>
                                <i className="single-post-icon fa-regular fa-pen-to-square" 
                                    onClick={handleUpdatePost}>
                                </i>
                                <i className="single-post-icon fa-regular fa-trash-can" 
                                    onClick={handlePostDelete}>
                                </i>
                            </div>
                        }
                    </h1>
                )
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
            {
                updateMode ?
                <textarea 
                    className='single-post-description-input' 
                    name="description"
                    value={editPost.description}
                    onChange={onUpdatePostChange}
                /> :
                <p className='single-post-description'>
                    {singlePost.description}
                </p>
            }
        </div>
    </div>
  )
}
