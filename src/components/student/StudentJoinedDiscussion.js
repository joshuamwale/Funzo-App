import React from 'react'
import SideBar from './SideBar'

function StudentJoinedDiscussion() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
              <div className="discussion-header mt-4">
                  <span className='discussion-title'>Ongoing Discussion</span>
                  <button className='btn btn-sm discussion-button button-right'>Start Discussion</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default StudentJoinedDiscussion
