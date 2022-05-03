import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './sidebar.css'

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
        <li className='sidebar-list-item'>{cat.name}</li>
    ))

  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT ME</span>
            {/* <img src='https://www.pexels.com/photo/blue-and-white-planet-display-87009/' alt='' /> */}
            <p>
                Lorem sasfasfafssss
                asfasfasf
                asfasfasfasf
                aggddfh
                sdhsdgj
                sdjfsdf
                sdgj
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
                <i className="sidebar-icon fa-brands fa-instagram"></i>
                <i className="sidebar-icon fa-brands fa-youtube"></i>
                <i className="sidebar-icon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
}
