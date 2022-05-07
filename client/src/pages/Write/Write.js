import React from 'react'
import './write.css'
import { Context } from '../../context/Context'

import axios from 'axios';

export default function Write() {

    const {userDetails} = React.useContext(Context);

    const [writeDetails, setWriteDetails] = React.useState({
        title: "",
        description: "",
        username: userDetails.username,
        image: null,
        categories: []
    })
    const [file, setFile] = React.useState(null)

    function handleWriteChange(e) {
        setWriteDetails(prevDetails => (
            {
                ...prevDetails,
                [e.target.name]: e.target.type === "file" ? Date.now() + e.target.value.name : e.target.value
            }
        ))
    }

    async function onWriteSubmit(e) {
        e.preventDefault();
        if(writeDetails.image) {
            const data = new FormData();
            //const filename = Date.now() + file.name;
            console.log(filename);
            data.append("name",filename)
            data.append("file",file)
            console.log(writeDetails)
            try {
                await axios.post("/upload", data);
            } catch(err) {
                console.log("File upload failed: ",err);
            }
        }
        try {
            console.log("Write post: ", writeDetails);
            const res = await axios.post("/posts", writeDetails);
            //window.location.replace(`/post/${res.data._id}`)
        } catch(err) {  
            console.log("Failed to create new post ", err)
        }
    }

    console.log(writeDetails)

    return (
        <div className='write'>
        {
            file &&
            <img 
                className='write-image'
                src={URL.createObjectURL(file)}
                alt=''
            />
        }
        <form className='write-form' onSubmit={onWriteSubmit}>
            <div className='write-form-group'>
                <label htmlFor='file-input'>
                    <i className="write-icon fa-solid fa-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="file-input"
                    name='image'
                    onChange={handleWriteChange} 
                    style={{display: "none"}} 
                />
                <input
                    type="text" 
                    className='write-input'
                    name='title'
                    value={writeDetails.title}
                    onChange={handleWriteChange}
                    autoFocus={true} 
                    placeholder='Title' 
                    id="file-input" 
                />
            </div>
            <div className='write-form-group'>
                <textarea 
                    type="text"
                    className='write-input write-text' 
                    name='description'
                    value={writeDetails.description}
                    onChange={handleWriteChange}
                    placeholder='Tell your story...' 
                />
            </div>
            <button className='write-submit' type='submit'>Publish</button>
        </form>
    </div>
  )
}
