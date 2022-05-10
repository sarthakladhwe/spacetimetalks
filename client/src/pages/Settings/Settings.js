import React from 'react'
import './settings.css'
import axios from 'axios'

import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'

export default function Settings() {

  const {userDetails, userUpdated, logoutUser, isLoggedIn} = React.useContext(Context);
  const [updateUser, setUpdateUser] = React.useState({
      userId: userDetails._id,
      username: "",
      email: "",
      password: ""
  })
  const [file, setFile] = React.useState(null)
  const [success, setSuccess] = React.useState(false)
  const publicFolder = "http://localhost:5000/images/";

  async function onUserSubmit(e) {
    e.preventDefault();
    if(file) {
        const data = new FormData();
        data.append("name",updateUser.profilePicture)
        data.append("file",file) 
        try {
            await axios.post("/upload", data);
        } catch(err) {
            console.log("File upload failed: ",err);
        }
    }
    try {
        const res = await axios.put(`/users/${userDetails._id}`, updateUser);
        console.log(res.data)
        setSuccess(true);
        userUpdated(res.data);
    } catch(err) {  
        console.log("Failed to create new post ", err)
    }
  }

  function handleUserChange(e) {
    setUpdateUser(prevDetails => ({
        ...prevDetails,
        [e.target.name]: e.target.value
    }))
  }

  function onFileChange(e) {
    setFile(e.target.files[0]);
    //handleUserChange(e);
    setUpdateUser(prevDetails => ({
        ...prevDetails,
        profilePicture: Date.now() + e.target.files[0].name
    }))
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
                        file ?
                        <img
                            src={URL.createObjectURL(file)}
                            alt=''
                        /> :
                        userDetails.profilePicture ?
                        <img
                            src={publicFolder + userDetails.profilePicture}
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
                {
                    success &&
                    <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated!</span>
                }
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
