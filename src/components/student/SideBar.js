import React from 'react'
import {Link} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';

function SideBar() {
  return (
    <div>
        {/* <span className='bar'><AiIcons.AiOutlineBars /></span> */}
        <div className='profile'>
            <img className='logo' src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png'/>
            <p className='user-name'>User name</p>
        </div>

        <div className="nav flex-column nav-pills me-3">
          <Link to="/student" className='nav-link'><AiIcons.AiOutlineHome /> Home </Link>
          <Link to="/student-schedule" className='nav-link'><AiIcons.AiOutlineSchedule /> Schedule </Link>
          <Link to="/student-settings" className='nav-link'><AiIcons.AiOutlineSetting/> Settings </Link>
          <Link to="/student-discussion" className='nav-link'><GoIcons.GoCommentDiscussion /> Discussion </Link>
          <Link to="#" className='nav-link logout-button'><AiIcons.AiOutlineLogout /> Logout </Link>
        </div>
    </div>
  )
}

export default SideBar
