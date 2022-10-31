import React, {useEffect, useState} from 'react'
import SideBar from "./SideBar";
import {Link} from 'react-router-dom'

function StudentSchedule() {

  const [cohortSessions, setCohortSessions] = useState([]);
  // fetch sessions data
  useEffect(() => {
    fetch("/sessions")
      .then((r) => r.json())
      .then((response) => {
        console.log(`cohort session`, response);
        setCohortSessions(response);
      });
  }, []);

  const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((cohort) => {
  //   return cohort.date === parseInt(today_date)
  // });

  return (
    <div>
      <div className="row">
        <div className="col-md-2 main-sidebar">
          <SideBar />
        </div>
        <div className="col-md-10" id="schedule-div">
          {/* search bar to the left*/}

          <form className="search-form">
            <input
              class="form-control border border-secondary"
              id="search-bar"
              type="text"
              placeholder="Search Sessions"
              aria-label="Search"
            ></input>
          </form>

          {/* end of search */}

          <div className="session-row">
            <h3>Schedule</h3>
            
          </div>
          {/* add an accordion */}
          <div className="accordion" id="accordion">
            {/* first accordion */}
            {cohortSessions.map((session) => (
              <div class="card z-depth-0 bordered">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {session.date}
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  {/* editable table */}
                  <div class="card">
                    <div class="card-body">
                      <div id="table" class="table-editable">
                        <span class="table-add float-right mb-3 mr-2">
                          <a href="#!" class="text-success">
                            <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
                          </a>
                        </span>
                        <table class="table table-bordered table-responsive-md table-striped table-sm">
                          <thead>
                            <tr>
                              <th class="text-center">Session Name</th>
                              <th class="text-center">Time</th>
                              <th class="text-center">Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from(cohortSessions).map((today) => (
                              <tr>
                                <td class="pt-3-half">{today.session_name}</td>
                                <td class="pt-3-half">{today.time}</td>
                                <td class="pt-3-half">
                                  <a href={`${today.link}`}>{today.link}</a>
                                </td>

                                <td>
                                  <span class="table-remove">
                                    <button
                                      type="button"
                                      class="btn btn-dark btn-rounded btn-sm my-0"
                                    >
                                      <Link
                                        to={`/student-session-details/${today.id}`}
                                        className="button-links"
                                      >
                                        View
                                      </Link>
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
                </div>
              </div>
            </div>
            ))}
            {/* end of first accordion */}
            
          </div>
          {/* end of accordion */}
        </div>
      </div>
    </div>
  );
}

export default StudentSchedule;
