import React from 'react'
import './post.css'

export default function post() {
  return (
    <div className='post'>
        <img 
            className='post-image'
            src='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg'
            alt=''
        />
        <div className='post-info'>
            <div className='post-categories'>
                <span className='post-category'>
                    Hubble Top 100
                </span>
                <span className='post-category'>
                    Sound of Space
                </span>
            </div>
            <span className='post-title'>
                Loremmmm ispsps
            </span>
            <hr/>
            <span className='post-date'>1 hour ago</span>
        </div>
        <p className='post-description'>
            Lorem in id incididunt et anim dolore deserunt sit nisi laboris cupidatat sit. Enim veniam sint consectetur excepteur exercitation in reprehenderit irure deserunt deserunt aliquip aliqua. Exercitation laboris incididunt do minim esse id aliqua ea. Laborum veniam aliquip proident ea eiusmod nulla minim do aliquip voluptate aute.
            Lorem in id incididunt et anim dolore deserunt sit nisi laboris cupidatat sit. Enim veniam sint consectetur excepteur exercitation in reprehenderit irure deserunt deserunt aliquip aliqua. Exercitation laboris incididunt do minim esse id aliqua ea. Laborum veniam aliquip proident ea eiusmod nulla minim do aliquip voluptate aute.
            Lorem in id incididunt et anim dolore deserunt sit nisi laboris cupidatat sit. Enim veniam sint consectetur excepteur exercitation in reprehenderit irure deserunt deserunt aliquip aliqua. Exercitation laboris incididunt do minim esse id aliqua ea. Laborum veniam aliquip proident ea eiusmod nulla minim do aliquip voluptate aute.
        </p>
    </div>
  )
}
