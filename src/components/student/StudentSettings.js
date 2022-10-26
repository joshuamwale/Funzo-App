import React from 'react'
import SideBar from './SideBar'

function StudentSettings() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                Student settings
          </div>
      </div>
    </div>
  )
}

export default StudentSettings
