import React from 'react'
import SideBar from './SideBar'

function TMModule() {
  const mainColor = {
    backgroundColor:'#535678'
  }
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
              <div className="summary-header mt-4">
                <span className='summary-title'>List of Modules</span>
                <button className='btn btn-sm summary-button button-right'>Add Module</button>
              </div>
              <div className='summary-list'>
                <table class="table mt-4 table-striped table-hover table-sm ">
                  <thead>
                    <tr style={mainColor} className='summary-button'>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>HTML, CSS and Javascript Basic</td>
                      <td><button className='btn btn-sm summary-button'>View</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Peact Javascript</td>
                      <td><button className='btn btn-sm summary-button'>View</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Ruby Programming</td>
                      <td><button className='btn btn-sm summary-button'>View</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Ruby On Rails Web Development</td>
                      <td><button className='btn btn-sm summary-button'>View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
    </div>
  )
}

export default TMModule
