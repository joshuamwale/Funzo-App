import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import { useParams } from 'react-router-dom';

function TMSessionDetails() {

  const [tmSession, setTmSession] = useState([])

  let {session_id} =  useParams()
  useEffect(() =>{
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/sessions/${session_id}`)
    .then(r => r.json())
    .then(response => setTmSession(response))
  },[]);

  const [schedule, setSchedule] = useState({
      session_name: '',
      cohort_id: '',
      technical_mentor_id: '',
      date: '',
      time: '',
      link: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      session_name: schedule.session_name,
      cohort_id: schedule.cohort_id,
      technical_mentor_id: 1,
      date: schedule.date,
      time: schedule.time,
      link: schedule.link
    };
  }

  function handleChange(event) {
    setSchedule({
      ...schedule,
      [event.target.name]: event.target.value,
    });
  }

  // adding a comment
  const [comment, setComment] = useState("")

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentData = {
      student_id : 1,
      session_id : 2,
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
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
          <div className='row mt-5'>
              <div className='col-6 border-right'>
                <div className="summary-header mt-4">
                  <span className='summary-title'>{tmSession.session_name}</span>
                </div>
                <div className="summary-header mt-2 container">
                <form className=''>
                  <div className='entry-data'>
                      <div className="mb-3 mt-1">
                          <label className="form-label">Session Name</label>
                          <input type="text"
                            className="form-control"
                            name='session-name'
                            value={tmSession.session_name}
                            onChange={handleChange}
                             />
                      </div>
                      <div className="mb-3 mt-3">
                          <label className="form-label">Date</label>
                          <input type="date" 
                            className="form-control"
                            name='session-date'
                            value={tmSession.date}
                            onChange={handleChange}
                             />
                      </div>
                      <div className="mb-3 mt-3">
                          <label className="form-label">Time</label>
                          <input type="time" 
                            className="form-control" 
                            name='session-time'
                            value={tmSession.time}
                            onChange={handleChange}
                          />
                      </div>
                      <div className="mb-3 mt-3">
                          <label className="form-label">Link</label>
                          <input type="text" 
                            className="form-control" 
                            name='session-link'
                            value={tmSession.link}
                            onChange={handleChange}
                          />
                      </div>
                      <div className="mb-3 mt-3 form-check">
                        <input type="checkbox" class="form-check-input"/>
                        <label className="form-check-label">Resend Invite</label>
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
                      {tmSession.announcement}
                      </div>
                    </div>
                    {tmSession.comments && tmSession.comments.map((comment, index) =>(
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

export default TMSessionDetails
