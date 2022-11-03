import React, {useEffect, useState} from 'react'
import ModuleForm from './ModuleForm'
import SideBar from './SideBar'
import {Link} from 'react-router-dom'

function TMModule() {
  const [modules, setModules] = useState("")
  const mainColor = {
    backgroundColor:'#535678'
  }
  function openFormData(){
    document.getElementById("form-data").style.display="block";
  }

  useEffect(() =>{
    fetch("https://enigmatic-woodland-61895.herokuapp.com/cohorts")
    .then(r => r.json())
    .then(response => setModules(response))
  },[])

  return (
    <div>
      <ModuleForm />
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
              <div className="summary-header mt-4">
                <span className='summary-title'>List of Modules</span>
                <button className='btn btn-sm summary-button button-right' onClick={openFormData}>Add Module</button>
              </div>
              <div className='summary-list'>
                <table class="table mt-4 table-striped table-hover table-sm ">
                  <thead>
                    <tr style={mainColor} className='summary-button'>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(modules).map((cohort) => (
                      <tr key={cohort.id}>
                        <th scope="row">{cohort.id}</th>
                        <td>{cohort.name}</td>
                        <td><button className='btn btn-sm summary-button'><Link to={`/tm-module-details/${cohort.id}`} className='button-links'>View</Link></button></td>
                      </tr>
                    ))}
                    
                    {/* <tr>
                      <th scope="row">2</th>
                      <td>Peact Javascript</td>
                      <td><button className='btn btn-sm summary-button'><Link to="/tm-module-details/1" className='button-links'>View</Link></button></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Ruby Programming</td>
                      <td><button className='btn btn-sm summary-button'><Link to="/tm-module-details/1" className='button-links'>View</Link></button></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Ruby On Rails Web Development</td>
                      <td><button className='btn btn-sm summary-button'><Link to="/tm-module-details/1" className='button-links'>View</Link></button></td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TMModule
