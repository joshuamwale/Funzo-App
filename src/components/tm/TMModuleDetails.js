import React from 'react'
import SideBar from './SideBar'
import ModuleForm from './ModuleForm'
import NewStudent from './NewStudent'

function TMModuleDetails() {
  const mainColor = {
    backgroundColor:'#535678'
  }

  function openFormData(){
    document.getElementById("form-data").style.display="block";
  }
  function openNewStudentForm(){
    document.getElementById("student-form-data").style.display="block";
  }

  return (
    <div>
      <ModuleForm />
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
                  <span className='span-text'>Lorem Ipsum</span>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-3'>
                    <span style={{fontWeight: 'bolder'}} className='span-text'>Module Description:</span>
                  </div>
                  <div className='col-9'>
                  <span className='span-text'>Lorem Ipsum dolor sit amet, 
                    consectetur adipiscing, sed eiusmod tempor  Ipsum dolor sit amet, 
                    consectetur adipiscing, sed eiusmod ipsum dolor sit amet, 
                    consectetur adipiscing, sed eiusmod tempor incidunt
                  </span>
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Student1</td>
                      <td>student1@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Student2</td>
                      <td>student2@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Student3</td>
                      <td>student3@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Student4</td>
                      <td>student4@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Student5</td>
                      <td>student5@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Student1</td>
                      <td>student1@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Student2</td>
                      <td>student2@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Student3</td>
                      <td>student3@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Student4</td>
                      <td>student4@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Student5</td>
                      <td>student5@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Student1</td>
                      <td>student1@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Student2</td>
                      <td>student2@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Student3</td>
                      <td>student3@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Student4</td>
                      <td>student4@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Student5</td>
                      <td>student5@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Student1</td>
                      <td>student1@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Student2</td>
                      <td>student2@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Student3</td>
                      <td>student3@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Student4</td>
                      <td>student4@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Student5</td>
                      <td>student5@gmail.com</td>
                      <td><button className='btn btn-sm btn-outline-danger'>Remove</button></td>
                    </tr>
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
