import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import ModuleForm from './ModuleForm'
import NewStudent from './NewStudent'
import { useParams } from 'react-router-dom';


function TMModuleDetails() {

  const [modules, setModules] = useState([])
  let {module_id} =  useParams()
  // console.log(module_id)

  useEffect(() => {
    fetch(`/cohorts/${module_id}`)
    .then(res => res.json())
    .then(res => setModules(res))
  }, [module_id])



  const cohort_id = `${module_id}`

  const [students, setStudents] = useState([])
  useEffect(() =>{
    fetch(`/students`)
    .then(r => r.json())
    .then(response => setStudents(response))
  },[]);

  const [newmodule, setNewModule] = useState({
      module_name: '',
      description: ''
  });

  function handleModuleEdit(e){

    e.preventDefault();

    // const formData = {
    //   session_name: schedule.session_name,
    //   cohort_id: schedule.cohort_id,
    //   technical_mentor_id: 1,
    //   date: schedule.date,
    //   time: schedule.time,
    //   link: schedule.link
    // };
  }

  // const session_students = Array.from(students).filter((student) => {
  //   return student.cohort_id === parseInt(cohort_id)
  // });

  const mainColor = {
    backgroundColor:'#535678'
  }

  function openFormData(){
    document.getElementById("form-data").style.display="block";
  }
  function openNewStudentForm(){
    document.getElementById("student-form-data").style.display="block";
  }

  // const student_modules = module.student_modules
  
  return (
    <div>
      <ModuleForm name={modules.name} description={modules.description} handleEdit={handleModuleEdit}/>
      <NewStudent />
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
            <div className="summary-header mt-4 container">
                <div className='row'>
                  <div className='col-3'>
                    <span style={{fontWeight: 'bolder'}} className='span-text'>Module Name:</span>
                  </div>
                  <div className='col-9'>
                  <span className='span-text'>{modules.name}</span>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-3'>
                    <span style={{fontWeight: 'bolder'}} className='span-text'>Module Description:</span>
                  </div>
                  <div className='col-9'>
                  <span className='span-text'>{modules.description}</span>
                  </div>
                </div>
                <button className='btn btn-sm btn-outline-success button-right' onClick={openFormData}>edit module</button>
            </div>
            <div className='student-list container'>
              <div className="summary-header">
                <span style={{fontWeight: 'bolder'}} className='span-text'>List of Students</span>
                <button className='btn btn-sm summary-button button-right' onClick={openNewStudentForm}>Add Student</button>
              </div>
              <div className='student-summary mt-4'>
                <table class="table table-striped table-hover table-sm ">
                  <thead>
                    <tr style={mainColor} className='summary-button'>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modules.students && modules.students.map((student, index) =>(
                      <tr key={index}>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                      </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TMModuleDetails
