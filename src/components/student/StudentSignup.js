import React, { useState, useEffect } from "react";

function StudentSignup() {
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    cohort_id: "",
    image: "",
    password: "",
    password_confirmation: "",
  });

  // on change handler
  const handleChange = (e) => {
    setFormData({
      ...formData, // spread operator
      [e.target.name]: e.target.value,
    });
  };

  // on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          // redirect to login
          alert("You have successfully signed up!");
          window.location.href = "/student";
        }
      });
  };

  // fetch cohorts
  const [studentscohort, setStudentsCohort] = useState([]);
  useEffect(() => {
    fetch("/cohorts")
      .then((r) => r.json())
      .then((response) => {
        setStudentsCohort(response);
      });
  }, []);

  return (
    <div>
      <form className="entry-form">
        <div className="entry-data">
          <span style={{ fontWeight: "bolder" }} className="summary-title">
            Signup
          </span>
          <div class="mb-3 mt-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control-file"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Module</label>
            <select className="form-control" name="cohort_id" onChange={handleChange} >
              {studentscohort.map((cohort) => (
                <option key={cohort.id} value={cohort.id}>
                  {cohort.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button
              type="Submit"
              className="form-control btn-secondary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentSignup;
