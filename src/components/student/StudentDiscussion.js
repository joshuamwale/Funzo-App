import React from 'react'
import SideBar from './SideBar'

function StudentDiscussion() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <div className="discussion-header mt-4">
                  <span className='discussion-title'>Ongoing Discussion</span>
                  <button className='btn btn-sm discussion-button button-right'>Start Discussion</button>
                </div>
                <div className='discussion-list'>
                  <table class="table mt-4 table-striped table-hover table-sm ">
                    <thead>
                      <tr className='discussion-button'>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Initiater</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Undestanding react Hooks</td>
                        <td>Tonny Oseko</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Introduction to Ruby active record</td>
                        <td>Mike Sigh</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Form Validation in React</td>
                        <td>Tonny Oseko</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Writting clean code and code restructuriing</td>
                        <td>Jane Doe</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Error handling in ruby on rails</td>
                        <td>Gideon Snitch</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Market reception on most popular languages</td>
                        <td>Glenn Mwangi</td>
                        <td><button className='btn btn-sm discussion-button'>Join</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>
      </div>
    </div>
  )
}

export default StudentDiscussion
