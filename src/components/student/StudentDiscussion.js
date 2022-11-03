import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import {Link} from 'react-router-dom'
import NewDiscussionForm from './NewDiscussionForm';

function StudentDiscussion() {

  const [discussion, setDiscussion] = useState([])

  useEffect(() =>{
    fetch("https://enigmatic-woodland-61895.herokuapp.com/discussions")
    .then(r => r.json())
    .then(response => setDiscussion(response))
  },[]);

  // const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((cohort) => {
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
    fetch("https://enigmatic-woodland-61895.herokuapp.com/discussions", {
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
                <div className="summary-header mt-4">
                  <span className='summary-title'>Ongoing Discussion</span>
                  <button className='btn btn-sm summary-button button-right' onClick={openFormData}>Start Discussion</button>
                </div>
                <div className='summary-list'>
                  <table class="table mt-4 table-striped table-hover table-sm ">
                    <thead>
                      <tr className='summary-button'>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Array.from(discussion).map((discussion, index) => (
                      <tr key={index}>
                        <th scope="row">{discussion.id}</th>
                        <td>{discussion.title}</td>
                        <td><button className='btn btn-sm summary-button'><Link to={`/student-join-discussion/${discussion.id}`} className='button-links'>Join</Link></button></td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          </div>
      </div>
    </div>
  )
}

export default StudentDiscussion
