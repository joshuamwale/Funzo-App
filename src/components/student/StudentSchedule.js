import React from 'react'
import SideBar from './SideBar'

function StudentSchedule() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                Student Schedule
          </div>
      </div>
    </div>
  )
}

export default StudentSchedule
