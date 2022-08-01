import React from 'react'
import './settings.css'
import {axiosInstance} from '../../config'

import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'

export default function Settings() {

  const {userDetails} = React.useContext(Context);
  const [updateUser, setUpdateUser] = React.useState({
      userId: userDetails._id,
      username: "",
      email: "",
      password: "",
      profilePicture: null
  })
  const [file, setFile] = React.useState(null)

  async function onUserSubmit(e) {
    e.preventDefault();
    if(file) {
        const data = new FormData();
        data.append("name", updateUser.profilePicture)
        data.append("file", file) 
        try {
            await axiosInstance.put("/upload", data);
        } catch(err) {
            console.log("File upload failed: ",err);
        }   
    }
    try {
        await axiosInstance.put(`/users/${userDetails._id}`, updateUser);
    } catch(err) {  
        console.log("Failed to create new post ", err)
    }
  }

  function handleUserChange(e) {
    setUpdateUser(prevDetails => ({
        ...prevDetails,
        [e.target.name]: e.target.name === "profilePicture" ?
                            Date.now() + e.target.files[0].name :
                            e.target.value
    }))
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);
    handleUserChange(e);
  }

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
            <form className='settings-form' onSubmit={onUserSubmit}>
                <label>Profile Picture</label>
                <div className='settings-profile-picture'>
                    {
                        userDetails.profilePicture ?
                        <img
                            src={userDetails.profilePicture}
                            alt=''
                        /> :
                        <i className="profile-icon fa-solid fa-user-astronaut"></i>
                    }
                    <label htmlFor='file-input'>
                        <i className="settings-profile-icon fa-regular fa-circle-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id="file-input" 
                        name="profilePicture"
                        onChange={onFileChange}
                        style={{display: "none"}} 
                    />
                </div>
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder={userDetails.username}
                    name="username"
                    onChange={handleUserChange}
                />
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder={userDetails.email}
                    name="email"
                    onChange={handleUserChange}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    onChange={handleUserChange}
                />
                <button className='settings-submit' type='submit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
