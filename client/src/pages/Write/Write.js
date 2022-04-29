import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
            className='write-image'
            src='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg'
            alt='' 
        />
        <form className='write-form'>
            <div className='write-form-group'>
                <label htmlFor='file-input'>
                    <i className="write-icon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file-input" style={{display: "none"}} />
                <input type="text" className='write-input' autoFocus={true} placeholder='Title' id="file-input" />
            </div>
            <div className='write-form-group'>
                <textarea type="text" className='write-input write-text' placeholder='Tell your story...' />
            </div>
            <button className='write-submit'>Publish</button>
        </form>
    </div>
  )
}
