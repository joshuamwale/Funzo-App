import SideBar from "./SideBar";
import React, { useState, useEffect } from "react";
import "./studentsettings.css";

function StudentSettings() {
  const user = localStorage.getItem("user");
  const [studentuser, setStudentUser] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-woodland-61895.herokuapp.com/students")
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
        // filter students by email
        const student = response.filter((student) => student.email === user);
        setStudentUser(student);
      });
  }, []);

  // get student id
  const student_id = studentuser.map((student) => student.id);
  console.log(student_id);

  const [studentdetails, setStudentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    password: "",
  });

  const handleChange = (e) =>
    setStudentDetails({
      ...studentdetails,
      [e.target.name]: e.target.value,
    });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: studentdetails.name,
      email: studentdetails.email,
      phone: studentdetails.phone,
      image: studentdetails.image,
      password: studentdetails.password,
    };
    // console.log(formData)
    fetch(`https://enigmatic-woodland-61895.herokuapp.com/student/${student_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2 main-sidebar">
          <SideBar />
        </div>
        <div className="col-md-10">
          <form onSubmit={handleSubmit} className="student-settings">
            <h3 className="mt-4">Edit Profile</h3>
            {studentuser.map((student) => {
              return (
                <div key={student.id}>
                  <label className="form-label">Name :</label>
                  <input
                    className="form-control"
                    type="text"
                    name="student_name"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Name..."
                  />
                  <br />
                  <label className="form-label">Email :</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Email..."
                  />
                  <br />
                  <label className="form-label">Phone:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={student.phone}
                    onChange={handleChange}
                    placeholder="Phone..."
                  />
                  <br />
                  <label className="form-label">Image :</label>
                  <input
                    className="form-control"
                    type="text"
                    name="image"
                    value={student.image}
                    onChange={handleChange}
                    placeholder="Image url..."
                  />
                  <br />
                  <label className="form-label">Password :</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="change Password..."
                  />
                  <br />

                  <input
                    className="btn btn-secondary btn-sm float-right"
                    type="submit"
                    value="Submit"
                  />
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentSettings;
