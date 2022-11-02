import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";

function SideBar() {
  // show username on login
  const username = localStorage.getItem("username");
  console.log(username);










  // logout function
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/student-login";
  };

  return (
    <div>
      {/* <span className='bar'><AiIcons.AiOutlineBars /></span> */}
      <div className="profile">
        <img
          className="logo"
          alt=""
          src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"
        />
        <p className="user-name">User name</p>
      </div>

      <div className="nav flex-column nav-pills">
        <Link to="/student" className="nav-link">
          <AiIcons.AiOutlineHome /> <span className="ml-2">Home</span>{" "}
        </Link>
        <Link to="/student-schedule" className="nav-link">
          <AiIcons.AiOutlineSchedule /> <span className="ml-2">Schedule</span>{" "}
        </Link>
        <Link to="/student-settings" className="nav-link">
          <AiIcons.AiOutlineSetting /> <span className="ml-2">Settings</span>{" "}
        </Link>
        <Link to="/student-discussion" className="nav-link">
          <GoIcons.GoCommentDiscussion />{" "}
          <span className="ml-2">Discussion</span>{" "}
        </Link>
        <Link to="" className="nav-link logout-button" onClick={handleLogout}>
          <AiIcons.AiOutlineLogout /> <span className="ml-2">Logout</span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
