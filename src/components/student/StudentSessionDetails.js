import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'

function StudentSessionDetails() {
  // useEffect(() =>{
  //   fetch("/sessions")
  //   .then(r => r.json())
  //   .then(response => setCohortSession(response))
  // },[]);

  // const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((cohort) => {
  //   return cohort.date === parseInt(today_date)
  // });

  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
            <div className='row mt-4'>
              <div className='col-6 border-right'>
                <div className="summary-header mt-4">
                  <span className='summary-title'>Module Name</span>
                </div>
                <div className="summary-header mt-4 container">
                  <div className='row'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Session Name:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>Session Name</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Time:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>time</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Mentor:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>tm name</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Link:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>link Description</span>
                    </div>
                  </div>
              </div>
              <div className='attendee-list mt-4'>
                <span className='summary-title'>List of Attendees</span>
                <div className='attendees-list-summary mt-2'>
                  <div className='student-summary'>
                  <table class="table table-striped table-hover table-sm ">
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Student1</td>
                        <td>student1@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Student2</td>
                        <td>student2@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Student3</td>
                        <td>student3@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Student4</td>
                        <td>student4@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>
              </div>
              <div className='col-6'>
                <div className="summary-header mt-4">
                  <span className='summary-title'>Announcements</span>
                  <div className='announcement-summary mt-2'>
                    <div className='chats mt-1 border-bottom'>
                      <span className='student-name'>TM</span>
                      <div className='text-secondary'>
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      </div>
                    </div>
                    <div className='chats mt-1'>
                      <span className='student-name'>Student 1</span>
                      <div>
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      </div>
                    </div>
                    <div className='chats mt-1'>
                      <span className='student-name'>Student 5</span>
                      <div>
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      </div>
                    </div>
                    <div className='chats mt-1'>
                      <span className='student-name'>Student 9</span>
                      <div>
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                        Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      </div>
                    </div>
                    
                  </div>
                  <form className='adding-comment mt-2'>
                  <input className='h-100 px-4 student-comment-text' type='text' placeholder='Add comment.......' />
                  <button type='submit' className='btn btn-secondary btn-sm mt-2 float-right'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default StudentSessionDetails
