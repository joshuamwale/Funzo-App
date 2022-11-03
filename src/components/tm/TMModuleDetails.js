import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

function TMModuleDetails() {
  // fetching module using parameters
  const [modules, setModules] = useState([]);
  let { module_id } = useParams();
  // console.log(module_id)

  useEffect(() => {
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/cohorts/${module_id}`)
      .then((res) => res.json())
      .then((res) => setModules(res));
  }, [module_id]);

  const [newmodule, setNewModule] = useState({
    name: "",
    description: "",
  });

  // on change handler
  const handleChange = (e) => {
    setNewModule({
      ...newmodule,
      [e.target.name]: e.target.value,
    });
  };

  function handleModuleEdit(e) {
    e.preventDefault();

    const formData = {
      name: newmodule.module_name,
      description: newmodule.module_description,
    };

    console.log(formData);
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/cohorts/${ module_id }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  // const session_students = Array.from(students).filter((student) => {
  //   return student.cohort_id === parseInt(cohort_id)
  // });

  const mainColor = {
    backgroundColor: "#535678",
  };

  function openFormData() {
    document.getElementById("form-data").style.display = "block";
  }

  function closeFormData() {
    document.getElementById("form-data").style.display = "none";
  }

  // const student_modules = module.student_modules

  return (
    <div>
      {/* editing module form */}

      <div className="form-data" id="form-data">
        <form className="entry-form" onSubmit={handleModuleEdit}>
          <div className="entry-data">
            <button
              className="btn btn-sm btn-outline-danger button-right"
              onClick={closeFormData}
            >
              <AiIcons.AiOutlineClose />
            </button>
            <div class="mb-3 mt-5">
              <label className="form-label">Module Name</label>
              <input
                type="text"
                className="form-control"
                name="module_name"
                value={modules.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Module Description</label>
              <textarea
                className="form-control"
                name="module_description"
                value={modules.description}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <button type="Submit" className="form-control btn-secondary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-md-2 tm-main-sidebar">
          <SideBar />
        </div>
        <div className="col-md-10">
          <div className="summary-header mt-4 container">
            <div className="row">
              <div className="col-3">
                <span style={{ fontWeight: "bolder" }} className="span-text">
                  Module Name:
                </span>
              </div>
              <div className="col-9">
                <span className="span-text">{modules.name}</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3">
                <span style={{ fontWeight: "bolder" }} className="span-text">
                  Module Description:
                </span>
              </div>
              <div className="col-9">
                <span className="span-text">{modules.description}</span>
              </div>
            </div>
            <button
              className="btn btn-sm btn-outline-success button-right"
              onClick={openFormData}
            >
              edit module
            </button>
          </div>
          <div className="student-list container">
            <div className="summary-header">
              <span style={{ fontWeight: "bolder" }} className="span-text">
                List of Students
              </span>
            </div>
            <div className="student-summary mt-4">
              <table class="table table-striped table-hover table-sm ">
                <thead>
                  <tr style={mainColor} className="summary-button">
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.students &&
                    modules.students.map((student, index) => (
                      <tr key={index}>
                        <th scope="row">{student.id}</th>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger">
                            Remove
                          </button>
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
  );
}

export default TMModuleDetails;
