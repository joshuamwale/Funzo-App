import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import * as FiIcons from 'react-icons/fi';
import NewDiscussionForm from './NewDiscussionForm';
import { useParams } from 'react-router-dom';

function StudentJoinedDiscussion() {

  const [studentdiscussion, setStudentDiscussion] = useState([])

  let {discussion_id} =  useParams()

  useEffect(() =>{
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/discussions/${discussion_id}`)
    .then(r => r.json())
    .then(response => setStudentDiscussion(response))
  },[]);

  // creating new topic of discussion

  const [newdiscussion, setNewDiscussion] = useState({
    title: "",
    discussion: ""
  });

  function handleChange(event) {
    setNewDiscussion({
      ...newdiscussion,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title: newdiscussion.title,
    description: newdiscussion.description
    };

    // console.log(formData)
    fetch("https://enigmatic-woodland-61895.herokuapp.com/discussions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  // adding comment to a discussion

  const [comment, setComment] = useState("")

  function handleCommentSubmit(e) {
    e.preventDefault();
    const commentData = {
      discussion_id : 1,
      student_id : 1,
      comment: comment
    };
    // console.log(commentData)
    fetch("https://enigmatic-woodland-61895.herokuapp.com/student_discussions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
  }


  function openFormData(){
    document.getElementById("form-data").style.display="block";
  }
  return (
    <div>
      <NewDiscussionForm title={newdiscussion.text} 
        description={newdiscussion.description}
        handleChange={handleChange}
        handleSubmit={handleSubmit}/>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
              <div className="summary-header mt-4 container">
                  <span className='summary-title'>{studentdiscussion.title}</span>
                  <button className='btn btn-sm summary-button button-right' onClick={openFormData}>Start Discussion</button>
              </div>
              <div className='discussion-comments mt-3 container'>
                <span className='discussion-description'>
                {studentdiscussion.description}
                </span>
                <div className='discussion-student-comments border-1 border-secondary  mt-3'>
                {studentdiscussion.student_discussions && studentdiscussion.student_discussions.map((comment, index) => (
                  <div key={index} className='chats mt-1'>
                    <span className='student-name'>{comment.student_id}</span>
                    <div>
                      {comment.comment}
                    </div>
                  </div>
                ))}

                </div>
                <form className='new-comment border-1 border-secondary' onSubmit={handleCommentSubmit}>
                  <input className='h-100 px-4 comment-text'
                    type='text'
                    name='comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Add comment.......' />
                  <button className='btn send-button'><FiIcons.FiSend/></button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default StudentJoinedDiscussion
