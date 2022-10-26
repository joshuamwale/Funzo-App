import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return (
    <div>
        <div className='profile'>
            <img className='logo' src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png'/>
            <p className='user-name'>User name</p>
        </div>

        <div className="nav flex-column nav-pills me-3">
          <Link to="/tm" className='nav-link'> Home </Link>
          <Link to="/tm-schedule" className='nav-link'> Schedule </Link>
          <Link to="/tm-module" className='nav-link'> Module </Link>
          {/* <Link to="/tm-logout" className='nav-link'> Logout </Link> */}
        </div>
    </div>
  )
}

export default SideBar