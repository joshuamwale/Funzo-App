import React from 'react'
import SideBar from './SideBar'

function TMModuleDetails() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <h3>TM HomePage</h3>
          </div>
        </div>
    </div>
  )
}

export default TMModuleDetails
