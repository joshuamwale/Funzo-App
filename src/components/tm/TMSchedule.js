import React from 'react'
import SideBar from './SideBar'

function TMSchedule() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 tm-main-sidebar'><SideBar /></div>
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
            <h3>Student Schedule</h3>
            <button
              type="button"
              class="btn btn-secondary"
              id="add-session-btn"
              Link to="/add-session" // this is where the add session button will link to
            >
              Add Session
            </button>
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
                                    View
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
        </div>
        </div>
    </div>
  )
}

export default TMSchedule
