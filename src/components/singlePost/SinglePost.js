import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='single-post'>
        <div className='single-post-wrapper'>
            <img 
                className='single-post-image'
                src='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg' 
                alt=''
            />
            <h1 className='single-post-title'>Single Post Title</h1>
            <div className='single-post-edit'>
                <i className="single-post-icon fa-regular fa-pen-to-square"></i>
                <i className="single-post-icon fa-regular fa-trash-can"></i>
            </div>
            <div className='single-post-info'>
                <span className='single-post-author'>Author: <b>Sarthak</b></span>
                <span className='single-post-date'>1 hour ago</span>
            </div>
            <p className='single-post-description'>
                Voluptate do sit adipisicing qui ullamco deserunt. Exercitation eu nostrud mollit mollit fugiat qui sint tempor cillum nisi. Consequat ullamco velit cillum ea quis adipisicing enim sint esse ad ex incididunt culpa tempor. Laboris cillum eu consequat eiusmod magna.

                Ea officia non proident labore ad aliquip consectetur ea deserunt esse mollit. Nulla est adipisicing minim dolor tempor minim nisi cupidatat minim. Ex labore nisi reprehenderit occaecat commodo in culpa. Deserunt consectetur incididunt ut magna tempor cupidatat ea occaecat pariatur ipsum. Anim non et excepteur sit.

                Voluptate ea voluptate velit tempor adipisicing tempor do ut tempor reprehenderit labore occaecat. Irure adipisicing dolore nulla laborum magna ex anim amet aute. Elit elit ut officia in nostrud ullamco id ex ullamco eu eu cupidatat do. Do laborum ut incididunt consectetur ea aliqua sit aute laboris aute deserunt aute.

                Elit duis voluptate laborum qui non fugiat reprehenderit aliqua minim velit aute tempor duis magna. Pariatur quis excepteur ex labore irure minim officia labore sint reprehenderit dolore non ullamco nisi. Cillum magna voluptate tempor est magna non occaecat esse sit. Quis consectetur deserunt voluptate nulla ipsum ullamco exercitation pariatur eu dolore. Nostrud ullamco dolor minim proident ex nostrud nisi duis dolore laboris incididunt ex nulla.

                Ut incididunt exercitation ut cillum cillum deserunt. Reprehenderit ullamco Lorem Lorem nulla et ex excepteur. Velit ea cillum id non tempor anim excepteur velit sunt enim reprehenderit minim. Ipsum incididunt ullamco in sunt veniam in veniam fugiat. Et reprehenderit deserunt esse ad labore eu nisi sit commodo nulla est. Eiusmod ut mollit esse amet consequat in occaecat.

                Laboris et esse eu aliquip sint do Lorem cillum. Sunt sint fugiat nulla qui reprehenderit fugiat eiusmod. Lorem et aliquip eiusmod nulla cupidatat id laborum id magna fugiat culpa sit quis.

                Cillum pariatur ex quis ut incididunt. Non ea non exercitation dolor est mollit est culpa in veniam ipsum. Esse ipsum magna veniam aute veniam enim culpa consequat occaecat do mollit adipisicing. Nostrud labore deserunt eiusmod labore reprehenderit proident eiusmod. Proident do amet cillum non occaecat nulla dolor exercitation non exercitation aliqua magna duis. Dolore minim elit consectetur dolor tempor nostrud ipsum ipsum fugiat sunt et in aute. Pariatur qui commodo ipsum dolor deserunt eu nostrud fugiat elit.
            </p>
        </div>
    </div>
  )
}
