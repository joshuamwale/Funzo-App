import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import * as FiIcons from 'react-icons/fi';
import NewDiscussionForm from './NewDiscussionForm';
import { useParams } from 'react-router-dom';

function StudentJoinedDiscussion() {

  const [studentdiscussion, setStudentDiscussion] = useState([])

  let {discussion_id} =  useParams()

  useEffect(() =>{
    fetch(`/discussions/${discussion_id}`)
    .then(r => r.json())
    .then(response => setStudentDiscussion(response))
  },[]);

  // const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((discussioncohort) => {
  //   return cohort.date === parseInt(today_date)
  // });

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
    fetch("/discussions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
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
