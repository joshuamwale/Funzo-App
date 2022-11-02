import SideBar from './SideBar'
import React, { useEffect, useState} from 'react'
import './studentsettings.css'

function StudentSettings() {

      return (
          <div>
            <div className="row">
              <div className="col-md-2 main-sidebar">
                <SideBar />
              </div>
              <div className="col-md-10">
              <form onSubmit={this.handleSubmit} className="student-settings">
                  <h1>Edit Profile</h1>
                  <label className='form-label'>Name :</label> <input className='form-control' type="text" value={this.state.Name} onChange={this.Namehandler} placeholder="Name..." /><br />
                  <label className='form-label'>Email :</label> <input className='form-control' type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                  <label className='form-label'>Phone:</label> <input className='form-control' type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone..." /><br />
                  <label className='form-label'>Image :</label> <input className='form-control-file' type="file" value={this.state.image} onChange={this.imagehandler} placeholder="Image..." /><br />
                  <label className='form-label'>Password :</label> <input className='form-control' type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                  
                  <input type="submit" value="Submit" />
              </form>
              </div>
              </div>
          </div>
      )
  }
export default StudentSettings
