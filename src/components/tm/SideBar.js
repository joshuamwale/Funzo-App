import React from 'react'
import {Link} from 'react-router-dom'
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';

function SideBar() {
  // arrow function to show username on login
  const showUsername = () => {
    const username = localStorage.getItem('user');
    return username;
  }

  // check if user is logged in and display sidebar
  const checkLogin = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return (
        <div>
          <div className='profile'>
            <img className='logo' alt='' src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png' />
            <p className='user-name'>{showUsername()}</p>
          </div>
          <div className='nav flex-column nav-pills'>
            <Link to='/student' className='nav-link'>
              <AiIcons.AiOutlineHome /> <span className='ml-2'>Home</span>{' '}
            </Link>
            <Link to='/student-schedule' className='nav-link'>
              <AiIcons.AiOutlineSchedule /> <span className='ml-2'>Schedule</span>{' '}
            </Link>
            <Link to='/student-settings' className='nav-link'>
              <AiIcons.AiOutlineSetting /> <span className='ml-2'>Settings</span>{' '}
            </Link>
            <Link to='/student-discussion' className='nav-link'>
              <MdIcons.MdForum /> <span className='ml-2'>Discussion</span>{' '}
            </Link>
            <Link to='' className='nav-link logout-button' onClick={handleLogout}>
              <AiIcons.AiOutlineLogout /> <span className='ml-2'>Logout</span>{' '}
            </Link>
          </div>
        </div>
      );
    }

  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/tm-login";
  };

  return (
    <div>
        <div className='profile'>
            <img className='logo' alt='' src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png'/>
            <p className='user-name'>{showUsername()}</p>
        </div>

        <div className="nav flex-column nav-pills me-3">
          <Link to="/tm" className='nav-link'> <AiIcons.AiOutlineHome /><span className='ml-2'>Home</span> </Link>
          <Link to="/tm-schedule" className='nav-link'><AiIcons.AiOutlineSchedule /> <span className='ml-2'>Schedule</span> </Link>
          <Link to="/tm-module" className='nav-link'><MdIcons.MdViewModule /> <span className='ml-2'>Module</span> </Link>
          <Link to="#" className='nav-link' onClick={handleLogout} ><AiIcons.AiOutlineLogout /> <span className='ml-2'>Logout</span> </Link>
        </div>
    </div>
  )
}

export default SideBar