import React from 'react'
import SideBar from './SideBar'

function TMModule() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <h3>TM Module Page</h3>
          </div>
        </div>
    </div>
  )
}

export default TMModule
