import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import { useParams, Link } from 'react-router-dom';

// fetching student details

function StudentSessionDetails() {
  const [studentSession, setStudentSession] = useState([])
  let {session_id} =  useParams()
  useEffect(() =>{
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/sessions/${session_id}`)
    .then(r => r.json())
    .then(response => setStudentSession(response))
  },[]);

  const [comment, setComment] = useState("")

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentData = {
      student_id : 1,
      session_id : `${session_id}`,
      description: comment
    };
    fetch("https://enigmatic-woodland-61895.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
    setComment('');
  }

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
                    <span className='summary-title'>{studentSession.session_name}</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Time:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>{studentSession.time}</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Mentor:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'>{studentSession.technical_mentor_id}</span>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'>
                      <span style={{fontWeight: 'bolder'}} className='summary-title'>Link:</span>
                    </div>
                    <div className='col-8'>
                    <span className='summary-title'><a href={`${studentSession.link}`}>{studentSession.link}</a></span>
                    </div>
                  </div>
              </div>
              <div className='attendee-list mt-4'>
                <span className='summary-title'>List of Attendees</span>
                <div className='attendees-list-summary mt-2'>
                  <div className='student-summary'>
                  <table className="table table-striped table-hover table-sm ">
                    <tbody>
                    {studentSession.students && studentSession.students.map((student, index) =>(
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                      </tr>
                      ))}
                      
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
                      {studentSession.announcement}
                      </div>
                    </div>
                    {studentSession.comments && studentSession.comments.map((comment, index) =>(
                    <div className='chats' key={index}>
                      <span className='student-name'>{comment.student_id}</span>
                      <div>
                        {comment.description}
                      </div>
                    </div>
                    ))}                    
                  </div>
                  <form className='adding-comment mt-2' onSubmit={handleCommentSubmit}>
                  <input className='h-100 px-4 student-comment-text'
                     type='text'
                     name='comment'
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
                     placeholder='Add comment.......' />
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
