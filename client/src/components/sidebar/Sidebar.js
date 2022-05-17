import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async() => {
            const allCategories = await axios.get("/categories")
            setCategories(allCategories.data) 
        }
        getCategories()
    }, [])

    const listOfCategories = categories.map(cat => (
        <li className='sidebar-list-item'>
            <Link className='link' to={`/?cat=${cat.name}`}>
                {cat.name}
            </Link>
        </li>
    ))

  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT US</span>
            {/* <img src='https://www.pexels.com/photo/blue-and-white-planet-display-87009/' alt='' /> */}
            <p>
                Space Time Talks
            </p>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>CATEGORIES</span>
            <ul className='sidebar-list'>
                {listOfCategories}
            </ul>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>FOLLOW US</span>
            <div className='sidebr-social'>
                <a href='https://www.instagram.com/spacetimetalks/' target="_blank">
                    <i className="top-icon fa-brands fa-instagram"></i>
                </a>
                <a href='https://www.youtube.com/channel/UCzfAjmg89wlMtIz-LJZW4qA' target="_blank">
                    <i className="top-icon fa-brands fa-youtube"></i>
                </a>
                <a href='https://twitter.com/spacetime_talks' target="_blank">
                    <i className="top-icon fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    </div>
  )
}
