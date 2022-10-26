import React from 'react'
import {Link} from 'react-router-dom'
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

function SideBar() {
  return (
    <div>
        <div className='profile'>
            <img className='logo' src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png'/>
            <p className='user-name'>User name</p>
        </div>

        <div className="nav flex-column nav-pills me-3">
          <Link to="/tm" className='nav-link'> <AiIcons.AiOutlineHome /><span className='ml-2'>Home</span> </Link>
          <Link to="/tm-schedule" className='nav-link'><AiIcons.AiOutlineSchedule /> <span className='ml-2'>Schedule</span> </Link>
          <Link to="/tm-module" className='nav-link'><MdIcons.MdViewModule /> <span className='ml-2'>Module</span> </Link>
          <Link to="#" className='nav-link'><AiIcons.AiOutlineLogout /> <span className='ml-2'>Logout</span> </Link>
        </div>
    </div>
  )
}

export default SideBar