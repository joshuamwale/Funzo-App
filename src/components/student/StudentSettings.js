import SideBar from './SideBar'
import React, { useState, useEffect} from 'react'
import './studentsettings.css'

function StudentSettings() {

  const user = localStorage.getItem("user");

  const [studentuser, setStudentUser] = useState([]);
  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((response) => {
        // console.log(response)
        setStudentUser(response);
      });
  }, []);

  const session_user = studentuser.filter((student_user) => {
    return student_user.email === `${user}`
  });
  // console.log(session_user)

  const [studentdetails, setStudentDetails] = useState({
    student_name: "",
    email: "",
    phone:"",
    image: "",
    password: ""
  })

  const handleChange = (e) =>(
    setStudentDetails({
      ...studentdetails,
      [e.target.name]: e.target.value,
    })
  )
  
  function handleSubmit(e){
    e.preventDefault()
    const formData ={
      student_name: studentdetails.student_name,
      email: studentdetails.email,
      phone: studentdetails.phone,
      image: studentdetails.image,
      password: studentdetails.password
    }
    // console.log(formData)
    fetch("/student/signup", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }



      return (
          <div>
            <div className="row">
              <div className="col-md-2 main-sidebar">
                <SideBar />
              </div>
              <div className="col-md-10">
              <form onSubmit={handleSubmit} className="student-settings">
                  <h3 className='mt-4'>Edit Profile</h3>
                  <label className='form-label'>Name :</label>
                  <input className='form-control' 
                    type="text" 
                    name ="student_name"
                    value={session_user.student_name}
                    onChange={handleChange} 
                    placeholder="Name..." /><br />
                  <label className='form-label'>Email :</label> 
                  <input className='form-control' type="text" 
                    name='email'
                    value={session_user.email} 
                    onChange={handleChange} 
                    placeholder="Email..." /><br />
                  <label className='form-label'>Phone:</label> 
                  <input className='form-control' type="text" 
                    value={session_user.phone} 
                    onChange={handleChange} 
                    placeholder="Phone..." /><br />
                  <label className='form-label'>Image :</label> 
                  <input className='form-control' 
                    type="text" 
                    name='image'
                    value={session_user.image} 
                    onChange={handleChange} 
                    placeholder="Image url..." /><br />
                  <label className='form-label'>Password :</label> 
                  <input className='form-control' 
                    type="password" 
                    name='password'
                    value={session_user.password} 
                    onChange={handleChange} 
                    placeholder="Password..." /><br />
                  
                  <input className='btn btn-secondary btn-sm float-right' type="submit" value="Submit" />
              </form>
              </div>
              </div>
          </div>
      )
  }
export default StudentSettings
