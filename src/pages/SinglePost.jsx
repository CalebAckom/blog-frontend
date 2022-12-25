import React from 'react'
import Logo from "./../assets/single.png"
import User from "./../assets/Cal.jpg"
import Edit from "./../assets/edit.png"
import Delete from "./../assets/delete.png"
import { Link } from 'react-router-dom'

export const SinglePost = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src={Logo} alt=''></img>
        <div className='user'>
          <img src={User} alt=''></img>
          <div className='info'>
            <span>Caleb</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=''></img>
            </Link>
            <img src={Delete} alt=''></img>
          </div>
        </div>

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra suscipit odio, 
      sed viverra quam luctus vitae. Suspendisse aliquam eleifend eros quis volutpat. 
      Aliquam blandit iaculis odio eu convallis. <br></br><br></br>
      Cras vestibulum ullamcorper risus at vehicula. 
      Vivamus vel rutrum odio. Praesent auctor quam mauris, suscipit rhoncus magna molestie at. 
      Cras ullamcorper risus metus, in venenatis tortor fermentum quis. Sed non bibendum nisl, et hendrerit sem. 
      Etiam vehicula odio mi, id pellentesque nulla finibus ut. <br></br><br></br>
      Mauris accumsan purus ut tortor tincidunt, in vulputate sapien pulvinar. 
      Aenean lacinia convallis cursus. Nulla a tellus eleifend, venenatis tortor nec, tristique erat. Vestibulum tempor vulputate nunc eget suscipit. 
      In tristique, nisi at mattis faucibus, est neque pellentesque arcu, quis ultricies massa orci vitae ex. Nullam metus urna, pulvinar et ex vel, mattis malesuada ante. 
      Ut auctor finibus elementum. Aliquam eu ante metus. <br></br><br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra suscipit odio, 
      sed viverra quam luctus vitae. Suspendisse aliquam eleifend eros quis volutpat. 
      Aliquam blandit iaculis odio eu convallis.
      Cras vestibulum ullamcorper risus at vehicula. 
      Vivamus vel rutrum odio. Praesent auctor quam mauris, suscipit rhoncus magna molestie at. 
      Cras ullamcorper risus metus, in venenatis tortor fermentum quis. Sed non bibendum nisl, et hendrerit sem. 
      Etiam vehicula odio mi, id pellentesque nulla finibus ut.
      Mauris accumsan purus ut tortor tincidunt, in vulputate sapien pulvinar. 
      Aenean lacinia convallis cursus. Nulla a tellus eleifend, venenatis tortor nec, tristique erat. Vestibulum tempor vulputate nunc eget suscipit. 
      In tristique, nisi at mattis faucibus, est neque pellentesque arcu, quis ultricies massa orci vitae ex. Nullam metus urna, pulvinar et ex vel, mattis malesuada ante. 
      Ut auctor finibus elementum. Aliquam eu ante metus.
      </p>
      </div>
      <div className='menu'>M</div>
    </div>
  )
}

export default SinglePost