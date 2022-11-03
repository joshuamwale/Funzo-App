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
    announcement:""
  });

  const [cohortSessions, setCohortSessions] = useState([]);
  // fetch sessions data
  useEffect(() => {
    fetch("https://enigmatic-woodland-61895.herokuapp.com/sessions")
      .then((r) => r.json())
      .then((response) => {
        // console.log(`cohort session`, response);
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
      announcement: schedule.announcement
    };

    console.log(formData)
    fetch("https://enigmatic-woodland-61895.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setSchedule('')
    alert("sucessfully added");
    // .then((r) => r.json())
    // .then((user) => onLogin(user));
  }
  // fetch cohorts data
  useEffect(() => {
    fetch("https://enigmatic-woodland-61895.herokuapp.com/cohorts")
      .then((r) => r.json())
      .then((response) => {
        setModules(response);
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
              className="form-control border border-secondary"
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
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Add Schedule
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add a Schedule
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="col-form-label">
                          Session Name:
                        </label>
                        <input
                          type="text"
                          name="session_name"
                          className="form-control"
                          id="session-name"
                          value={schedule.session_name}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Date:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="date"
                          value={schedule.date}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Time:
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          name="time"
                          id="time"
                          value={schedule.time}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Module:
                        </label>
                        <select
                          className="form-control"
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
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Link:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="link"
                          name="link"
                          value={schedule.link}
                          onChange={handleChange}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Announcement:
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          name="announcement"
                          value={schedule.announcement}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
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
            {cohortSessions.map((session, index) => (
              <div className="card z-depth-0 bordered" key={index}>
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
                    {session.date}
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
                              <th className="text-center">Session Name</th>
                              <th className="text-center">Time</th>
                              <th className="text-center">Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cohortSessions.map((today, index) => {
                              if(today.date === (`${session.date}`)){
                              return(
                              <tr key={index}>
                                <td className="pt-3-half">{today.session_name}</td>
                                <td className="pt-3-half">{today.time}</td>
                                <td className="pt-3-half">
                                  <a href={`${today.link}`}>{today.link}</a>
                                </td>

                                <td>
                                  <span className="table-remove">
                                    <button
                                      type="button"
                                      className="btn btn-dark btn-rounded btn-sm my-0"
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
                            )}})}
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
