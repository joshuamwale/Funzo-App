import React from "react";
import SideBar from "./SideBar";
import {Link} from 'react-router-dom'

function TMSchedule() {
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
                    <form>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">
                          Schedule Name:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">
                          Date:
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="recipient-name"
                        ></input>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* end of add schedule modal */}
          </div>
          {/* add an accordion */}
          <div class="accordion" id="accordionExample">
            {/* first accordion */}
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
                    Friday 11th November 2022
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
                        <table class="table table-bordered table-responsive-md table-striped text-center">
                          <thead>
                            <tr>
                              <th class="text-center">Module</th>
                              <th class="text-center">Time</th>
                              <th class="text-center">Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="pt-3-half" contenteditable="true">
                                Aurelia Vega
                              </td>
                              <td class="pt-3-half" contenteditable="true">
                                30
                              </td>
                              <td class="pt-3-half" contenteditable="true">
                                Deepends
                              </td>

                              <td>
                                <span class="table-remove">
                                  <button
                                    type="button"
                                    class="btn btn-dark btn-rounded btn-sm my-0"
                                  >
                                    <Link to={`/tm-session-details/1`} className='button-links'>View</Link>
                                  </button>
                                </span>
                              </td>
                            </tr>
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
          {/* end of accordion */}

          {/* add an accordion */}
          <div class="accordion" id="accordionExample">
            {/* first accordion */}
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
                    Friday 11th November 2022
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
                        <table class="table table-bordered table-responsive-md table-striped text-center">
                          <thead>
                            <tr>
                              <th class="text-center">Module</th>
                              <th class="text-center">Time</th>
                              <th class="text-center">Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="pt-3-half" contenteditable="true">
                                Aurelia Vega
                              </td>
                              <td class="pt-3-half" contenteditable="true">
                                30
                              </td>
                              <td class="pt-3-half" contenteditable="true">
                                Deepends
                              </td>

                              <td>
                                <span class="table-remove">
                                  <button
                                    type="button"
                                    class="btn btn-dark btn-rounded btn-sm my-0"
                                  >
                                    <Link to={`/tm-session-details/1`} className='button-links'>View</Link>
                                  </button>
                                </span>
                              </td>
                            </tr>
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
          {/* end of accordion */}
        </div>
      </div>
    </div>
  );
}

export default TMSchedule;
