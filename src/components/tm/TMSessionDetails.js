import React from 'react'
import SideBar from './SideBar'

function TMSessionDetails() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
          <div className='row mt-5'>
              <div className='col-6 border-right'>
                <div className="summary-header mt-4">
                  <span className='summary-title'>Module Name</span>
                </div>
                <div className="summary-header mt-4 container">
                <form className=''>
                  <div className='entry-data'>
                      <div class="mb-3 mt-5">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div class="mb-3 mt-3">
                          <label className="form-label">Time</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div class="mb-3 mt-3">
                          <label className="form-label">Link</label>
                          <input type="text" className="form-control" />
                      </div>
                      <div class="mb-3 mt-3 form-check">
                        <input type="checkbox" class="form-check-input"/>
                        <label class="form-check-label">Resend Invite</label>
                      </div>
                      <div class="mb-3">
                          <button type="Submit" className="form-control btn-success">Edit</button>
                      </div>
                  </div>
              </form>
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

export default TMSessionDetails
