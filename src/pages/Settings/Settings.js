import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settings-wrapper'>
            <div className='settings-title'>
                <span className='settings-update-title'>
                    Update Account
                </span>
                <span className='settings-delete-title'>
                    Delete Account
                </span>
            </div>
            <form className='settings-form'>
                <label>Profile Picture</label>
                <div className='settings-profile-picture'>
                    <img
                        src='https://media-exp1.licdn.com/dms/image/C4D03AQEk3saQzwZMEw/profile-displayphoto-shrink_800_800/0/1583911954522?e=1656547200&v=beta&t=eumbJSoMV76Bx3RFd5EC7PBCuHJQGGjp7zM1zzJqv3U'
                        alt=''
                    />
                    <label htmlFor='file-input'>
                        <i className="settings-profile-icon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="file-input" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Sarthak" />
                <label>Email</label>
                <input type="email" placeholder="sarthak.ladhwe156@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className='settings-submit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
