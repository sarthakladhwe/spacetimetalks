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
        categories: []
    })
    const [file, setFile] = React.useState(null)

    function handleWriteChange(e) {
        setWriteDetails(prevDetails => (
            {
                ...prevDetails,
                [e.target.name]: e.target.value
            }
        ))
    }

    async function onWriteSubmit(e) {
        e.preventDefault();
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            setWriteDetails(prevDetails => (
                {
                    ...prevDetails,
                    image: file
                }
            ));
            try {
                await axios.post("/upload", data);
            } catch(err) {
                console.log("File upload failed: ",err);
            }
        }
        try {
            const res = await axios.post("/posts", writeDetails);
            window.location.replace(`/post/${res.data._id}`)
        } catch(err) {  
            console.log("Failed to create new post ", err)
        }
    }

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
                    onChange={(e) => setFile(e.target.files[0])} 
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
