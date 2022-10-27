import React from 'react'
import SideBar from './SideBar'
import * as FiIcons from 'react-icons/fi';
import NewDiscussionForm from './NewDiscussionForm';

function StudentJoinedDiscussion() {
  function openFormData(){
    document.getElementById("form-data").style.display="block";
  }
  return (
    <div>
      <NewDiscussionForm />
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
              <div className="summary-header mt-4 container">
                  <span className='summary-title'>Discussion Title</span>
                  <button className='btn btn-sm summary-button button-right' onClick={openFormData}>Start Discussion</button>
              </div>
              <div className='discussion-comments mt-3 container'>
                <span className='discussion-description'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                  Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                  Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                </span>
                <div className='discussion-student-comments border-1 border-secondary  mt-3'>
                  <div className='chats mt-1'>
                    <span className='student-name'>Student 1</span>
                    <div>
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                    </div>
                  </div>

                  <div className='chats mt-1'>
                    <span className='student-name'>Student 2</span>
                    <div>
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                    </div>
                  </div>

                  <div className='chats mt-1'>
                    <span className='student-name'>Student 3</span>
                    <div>
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                    </div>
                  </div>

                  <div className='chats mt-1'>
                    <span className='student-name'>Student 4</span>
                    <div>
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                      Ipsum dolor sit amet, consectetur adipiscing, sed eiusmod tempor incidunt
                    </div>
                  </div>
                  <div className='chats mt-1'>
                    <span className='student-name'>Student 2</span>
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
                </div>
                <form className='new-comment border-1 border-secondary'>
                  <input className='h-100 px-4 comment-text' type='text' placeholder='Add comment.......' />
                  <button className='btn send-button'><FiIcons.FiSend/></button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default StudentJoinedDiscussion
