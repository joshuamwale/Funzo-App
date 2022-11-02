import React, {useEffect, useState} from 'react'
import SideBar from './SideBar'
import {Link} from 'react-router-dom'

function TMHome() {
  const [cohortSession, setCohortSession] = useState("")
  const user=localStorage.getItem("user");
  console.log(user)

  useEffect(() =>{
    fetch("/sessions")
    .then(r => r.json())
    .then(response => setCohortSession(response))
  },[]);

  const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((cohort) => {
  //   return cohort.date === parseInt(today_date)
  // });

  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <h3>TM HomePage</h3>
                <div className="accordion" id="accordionExample">
            {/* first accordion */}
            <div className="card z-depth-0 bordered">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Friday 11th November 2022
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  {/* editable table */}
                  <div className="card">
                    <div className="card-body">
                      <div id="table" className="table-editable">
                        <span className="table-add float-right mb-3 mr-2">
                          <a href="#!" className="text-success">
                            <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                          </a>
                        </span>
                        <table className="table table-bordered table-responsive-md table-striped table-sm">
                          <thead>
                            <tr>
                              <th className="text-centeyr">Session Name</th>
                              <th className="text-center">Time</th>
                              <th className="text-center">Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from(cohortSession).map((today, index) =>(
                                <tr key={index}>
                                <td className="pt-3-half">
                                  {today.session_name}
                                </td>
                                <td className="pt-3-half">
                                  {today.time}
                                </td>
                                <td className="pt-3-half">
                                  <a href={`${today.link}`}>{today.link}</a>
                                </td>

                                <td>
                                  <span className="table-remove">
                                    <button
                                      type="button"
                                      className="btn btn-dark btn-rounded btn-sm my-0"
                                    >
                                      <Link to={`/tm-session-details/${today.id}`} className='button-links'>View</Link>
                                    </button>
                                  </span>
                                </td>
                              </tr>
                            ))}
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* editable table */}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default TMHome
