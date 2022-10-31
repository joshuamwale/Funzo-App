import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function TMSchedule() {
  const [modules, setModules] = useState([]);
  const [schedule, setSchedule] = useState({
    session_name: "",
    cohort_id: "",
    technical_mentor_id: "",
    date: "",
    time: "",
    link: "",
  });

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

  function handleChange(event) {
    setSchedule({
      ...schedule,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      session_name: schedule.session_name,
      cohort_id: schedule.cohort_id,
      technical_mentor_id: 1,
      date: schedule.date,
      time: schedule.time,
      link: schedule.link,
    };

    // console.log(formData)
    fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    alert("sucess");
    // .then((r) => r.json())
    // .then((user) => onLogin(user));
  }
  // fetch cohorts data
  useEffect(() => {
    fetch("/cohorts")
      .then((r) => r.json())
      .then((response) => {
        console.log(`cohort`, response.cohort_id);
        // setModules(response);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2 tm-main-sidebar">
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
            {/* add a schedule model to add a new aschedule */}
            <button
              type="button"
              class="btn btn-dark"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Add Schedule
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add a Schedule
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">
                          Session Name:
                        </label>
                        <input
                          type="text"
                          name="session_name"
                          class="form-control"
                          id="session-name"
                          value={schedule.session_name}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Date:
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          name="date"
                          id="date"
                          value={schedule.date}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Time:
                        </label>
                        <input
                          type="time"
                          class="form-control"
                          name="time"
                          id="time"
                          value={schedule.time}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Module:
                        </label>
                        <select
                          class="form-control"
                          name="cohort_id"
                          value={schedule.cohort_id}
                          onChange={handleChange}
                        >
                          {Array.from(modules).map((cohort) => (
                            <option key={cohort.id} value={cohort.id}>
                              {cohort.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Link:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="link"
                          name="link"
                          value={schedule.link}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Announcement:
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          name="announcement"
                          // value={schedule.announcement}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* end of add schedule modal */}
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
                                        to={`/tm-session-details/${today.id}`}
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

export default TMSchedule;
