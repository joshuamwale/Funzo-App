import SideBar from './SideBar'
import React, { Component, useEffect, useState} from 'react'


class TMNewSession extends Component {
  constructor(props) {
      super(props)

      this.state = {
          module: "",
          time: "",
          Date: "",
          link: "",
          announcement: "",
          


      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  modulehandler = (event) => {
      this.setState({
          module: event.target.value
      })
  }
  timehandler = (event) => {
      this.setState({
          time: event.target.value
      })
  }
  datehandler = (event) => {
      this.setState({
          date: event.target.value
      })
  }
  linkhandler = (event) => {
      this.setState({
          link: event.target.value
      })
  }
  announcementhandler = (event) => {
      this.setState({
          announcement: event.target.value
      })
  }

  
  handleSubmit = (event) => {
      alert(`${this.state.module} ${this.state.time}  Update Successfull !!!!`)
      console.log(this.state);
      this.setState({
          module: "",
          time: "",
          date: "",
          link: "",
          announcement: '',
          
      })
   event.preventDefault()
      
  }

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-2 main-sidebar">
              <SideBar />
            </div>
            <div className="col-md-10">
              <form onSubmit={this.handleSubmit} className="student-settings">
                  <h1>New Session</h1>
                  <label className='form-label'>Module :</label><select className='form-control' onChange={this.modulehandler} defaultValue="Select Module">
                      <option defaultValue>Select Module</option>
                      <option value="React Javascript">React Javascript</option>
                      <option value="Ruby Language">Ruby Language</option>
                      <option value="Ruby on Rails">Ruby on Rails</option>
                  </select><br />
                  <label className='form-label'>Time :</label> <input className='form-control' type="time" value={this.state.time} onChange={this.timehandler} placeholder="Time..." /><br />
                  <label className='form-label'>Date :</label> <input className='form-control' type="date" value={this.state.date} onChange={this.datehandler} placeholder="Date..." /><br />
                  <label className='form-label'>Link :</label> <input className='form-control' type="text" value={this.state.link} onChange={this.linkhandler} placeholder="Link..." /><br />
                  <label className='form-label'>Announcement :</label> <input className='form-control' type="text" value={this.state.announcement} onChange={this.announcementhandler} placeholder="Announcement..." /><br />
  
                  <input type="submit" value="Submit" />
                  </form>
              </div>
              </div>
          </div>
      )
  }
}

export default TMNewSession
