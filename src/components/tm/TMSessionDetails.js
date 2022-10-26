import React from 'react'
import SideBar from './SideBar'

function TMSessionDetails() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <h3>TM Session Details</h3>
          </div>
        </div>
    </div>
  )
}

export default TMSessionDetails
